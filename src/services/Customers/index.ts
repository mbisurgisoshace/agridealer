"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";

import { prisma } from "@/lib/prisma";
import { createCustomerSchema } from "@/schemas/customerSchema";

export async function createCustomer(
  values: z.infer<typeof createCustomerSchema>
) {
  try {
    // Validate input on server side
    const parsedValues = createCustomerSchema.safeParse(values);
    if (!parsedValues.success) {
      throw new Error("Invalid input data");
    }

    // Logic for getting the dealershipId (most likely from auth user)
    const dealershipId = 1;

    const newCustomer = await prisma.customer.create({
      data: {
        ...parsedValues.data,
        dealershipId,
      },
    });

    revalidatePath("/customers");

    return newCustomer.id;
  } catch (err) {
    console.error("Error creating customer:", err);
    throw new Error("Failed to create customer");
  }
}

export async function getCustomers() {
  try {
    // Logic for getting the dealershipId (most likely from auth user)
    const dealershipId = 1;

    const customers = await prisma.customer.findMany({
      where: {
        dealershipId,
      },
      include: {
        PurchaseOrder: true,
      },
    });

    return customers;
  } catch (err) {
    console.error("Error fetching customers:", err);
    throw new Error("Failed to fetch customers");
  }
}
