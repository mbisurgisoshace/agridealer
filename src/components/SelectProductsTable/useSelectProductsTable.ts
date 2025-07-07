import { useEffect, useState } from "react";

import {
  CropType,
  CompanyType,
  SeedProduct,
  BayerProduct,
  RegularProduct,
  ProductCompany,
} from "../../../generated/prisma";
import { getAllProducts, getProducts } from "@/services/Products";
import { getCompanies } from "@/services/Companies";
import { ProductView } from "@/types/products";

export type Regular = RegularProduct;
export type Seed = BayerProduct | SeedProduct;
export type Product = Seed | Regular;

export default function useSelectProductsTable() {
  const [products, setProducts] = useState<Product[]>([]);
  const [companies, setCompanies] = useState<ProductCompany[]>([]);
  const [allProducts, setAllProducts] = useState<ProductView[]>([]);
  const [selectedCropType, setSelectedCropType] = useState<CropType>();
  const [selectedCompany, setSelectedCompany] = useState<ProductCompany>();

  async function fetchCompanies() {
    const companies = await getCompanies();
    setCompanies(companies);
  }

  async function fetchProducts(companyType: CompanyType) {
    const products = await getProducts(companyType);
    setProducts(products);
  }

  async function fetchAllProducts() {
    const allProducts = await getAllProducts();
    setAllProducts(allProducts);
  }

  useEffect(() => {
    fetchCompanies();
    fetchAllProducts();
  }, []);

  const selectCompany = async (companyId: string) => {
    const company = companies.find(
      (company) => company.id.toString() === companyId
    );

    if (company) {
      setSelectedCompany(company);
      setSelectedCropType(undefined);
      await fetchProducts(company.companyType);
    }
  };

  const unselectCompany = () => {
    setProducts([]);
    setSelectedCompany(undefined);
    setSelectedCropType(undefined);
  };

  const selectCropType = (cropType: string) => {
    setSelectedCropType(
      Object.values(CropType).find((type) => type === cropType)
    );
  };

  const getCropTypes = () => {
    if (!selectedCompany) return [];
    return getCropTypeByCompany(selectedCompany.companyType);
  };

  const getCropTypeByCompany = (companyType: CompanyType): Array<CropType> => {
    switch (companyType) {
      case "Bayer":
        return ["Corn", "Sorghum", "Soybean", "Canola"];
      case "Seed":
        return ["Corn", "Soybean", "Alfalfa"];
      case "Regular":
        return [];
    }
  };

  return {
    products,
    allProducts,
    selectCompany,
    selectCropType,
    unselectCompany,
    selectedCompany,
    selectedCropType,
    companies: companies.map((company) => ({
      label: company.name,
      value: company.id.toString(),
    })),
    cropTypes: getCropTypes().map((cropType) => ({
      value: cropType,
      label: cropType,
    })),
  };
}
