"use server";

import { z } from "zod";

import { createCustomerSchema } from "@/schemas/customerSchema";
import { prisma } from "@/lib/prisma";

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

    return newCustomer.id;
  } catch (err) {
    console.error("Error creating customer:", err);
    throw new Error("Failed to create customer");
  }
}
