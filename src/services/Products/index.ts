"use server";

import { prisma } from "@/lib/prisma";
import { CompanyType } from "../../../generated/prisma";
import { ProductView } from "@/types/products";

export async function getAllProducts(): Promise<ProductView[]> {
  try {
    // Logic for getting the dealershipId (most likely from auth user)
    //const dealershipId = 1;
    const seedProducts = await prisma.seedProduct.findMany({
      include: {
        ProductCompany: true,
      },
    });
    const bayerProducts = await prisma.bayerProduct.findMany({
      include: {
        ProductCompany: true,
      },
    });
    const regularProducts = await prisma.regularProduct.findMany({
      include: {
        ProductCompany: true,
      },
    });

    return [
      ...seedProducts.map((product) => ({
        id: product.id,
        description: "",
        productCompanyId: product.productCompanyId,
        productCompanyName: product.ProductCompany.name,
        endUserPricing: product.endUserPricing,
      })),
      ...bayerProducts.map((product) => ({
        id: product.id,
        description: product.productDetail,
        productCompanyId: product.productCompanyId,
        productCompanyName: product.ProductCompany.name,
        endUserPricing: product.endUserPricing,
      })),
      ...regularProducts.map((product) => ({
        id: product.id,
        description: product.description || "",
        productCompanyId: product.productCompanyId,
        productCompanyName: product.ProductCompany.name,
        endUserPricing: product.endUserPricing,
      })),
    ];
  } catch (error) {
    console.error("Error fetching all products:", error);
    throw new Error("Failed to fetch all products");
  }
}

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
