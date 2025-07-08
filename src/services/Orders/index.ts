"use server";

import z from "zod";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

import {
  createPurchaseOrderSchema,
  createPurchaseOrderItemSchema,
} from "@/schemas/purchaseOrderSchema";

export async function getOrderById(orderId: number) {
  try {
    const order = await prisma.purchaseOrder.findUnique({
      where: { id: orderId },
      include: {
        Customer: true,
        PurchaseOrderItem: true,
      },
    });

    return order;
  } catch (error) {
    console.error("Error fetching order:", error);
    throw new Error("Failed to fetch order");
  }
}

export async function createOrder(
  customerId: number,
  values: z.infer<typeof createPurchaseOrderSchema>
) {
  try {
    // Validate input on server side
    const parsedValues = createPurchaseOrderSchema.safeParse(values);
    if (!parsedValues.success) {
      throw new Error("Invalid input data");
    }

    // Logic for getting the dealershipId (most likely from auth user)
    //const dealershipId = 1;

    const { items, ...order } = parsedValues.data;

    const newOrder = await prisma.purchaseOrder.create({
      data: {
        ...order,
        customerId,
        PurchaseOrderItem: {
          createMany: {
            data: items,
          },
        },
      },
    });

    return newOrder.id;
  } catch (error) {
    console.error("Error creating order:", error);
    throw new Error("Failed to create order");
  }
}

export async function updateOrderItem(
  orderItemId: number,
  values: z.infer<typeof createPurchaseOrderItemSchema>
) {
  try {
    console.log("values", values);

    const parsedValues = createPurchaseOrderItemSchema.safeParse(values);
    if (!parsedValues.success) {
      throw new Error("Invalid input data");
    }

    const orderItem = await prisma.purchaseOrderItem.findUnique({
      where: { id: orderItemId },
    });

    if (!orderItem) {
      throw new Error("Order item not found");
    }

    const order = await prisma.purchaseOrder.findUnique({
      where: { id: orderItem.puchaseOrderId },
    });

    if (!order) {
      throw new Error("Order not found");
    }

    const updatedItem = await prisma.purchaseOrderItem.update({
      where: { id: orderItemId },
      data: parsedValues.data,
    });

    revalidatePath(`/customers/${order.customerId}/orders/${order.id}`);

    return updatedItem;
  } catch (error) {
    console.error("Error updating order item:", error);
    throw new Error("Failed to update order item");
  }
}
