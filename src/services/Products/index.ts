"use server";

import { prisma } from "@/lib/prisma";
import { CompanyType } from "../../../generated/prisma";

export async function getProducts(companyType: CompanyType) {
  try {
    // Logic for getting the dealershipId (most likely from auth user)
    //const dealershipId = 1;

    switch (companyType) {
      case "Bayer":
        return await getBayerProducts();
      case "Seed":
        return await getSeedProducts();
      case "Regular":
        return await getRegularProducts();
      default:
        throw new Error("Invalid company type");
    }
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Failed to fetch products");
  }
}

async function getBayerProducts() {
  try {
    return prisma.bayerProduct.findMany({});
  } catch (error) {
    console.error("Error fetching Bayer products:", error);
    throw new Error("Failed to fetch Bayer products");
  }
}

async function getSeedProducts() {
  try {
    return prisma.seedProduct.findMany({});
  } catch (error) {
    console.error("Error fetching Seed products:", error);
    throw new Error("Failed to fetch Seed products");
  }
}

async function getRegularProducts() {
  try {
    return prisma.regularProduct.findMany({});
  } catch (error) {
    console.error("Error fetching Regular products:", error);
    throw new Error("Failed to fetch Regular products");
  }
}
