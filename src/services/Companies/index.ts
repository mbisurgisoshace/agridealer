"use server";

import { prisma } from "@/lib/prisma";

export async function getCompanies() {
  try {
    // Logic for getting the dealershipId (most likely from auth user)
    const dealershipId = 1;

    const customers = await prisma.productCompany.findMany({
      where: {
        dealershipId,
      },
    });

    return customers;
  } catch (err) {
    console.error("Error fetching companies:", err);
    throw new Error("Failed to fetch companies");
  }
}
