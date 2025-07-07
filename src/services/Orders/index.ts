"use server";

import z from "zod";
import { prisma } from "@/lib/prisma";
import { createPurchaseOrderSchema } from "@/schemas/purchaseOrderSchema";

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
