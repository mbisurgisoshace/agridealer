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

export async function getCompanyById(id: number) {
  try {
    const company = await prisma.productCompany.findUnique({
      where: {
        id,
      },
    });

    if (!company) {
      throw new Error("Company not found");
    }

    return company;
  } catch (err) {
    console.error("Error fetching company by ID:", err);
    throw new Error("Failed to fetch company");
  }
}
