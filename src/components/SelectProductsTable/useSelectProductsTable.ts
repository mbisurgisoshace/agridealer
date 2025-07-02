import { useEffect, useState } from "react";
import {
  CompanyType,
  CropType,
  ProductCompany,
} from "../../../generated/prisma";

import { getCompanies } from "@/services/Companies";

export default function useSelectProductsTable() {
  const [companies, setCompanies] = useState<ProductCompany[]>([]);
  const [selectedCropType, setSelectedCropType] = useState<CropType>();
  const [selectedCompany, setSelectedCompany] = useState<ProductCompany>();

  async function fetchCompanies() {
    const companies = await getCompanies();
    setCompanies(companies);
  }

  useEffect(() => {
    fetchCompanies();
  }, []);

  const selectCompany = (companyId: string) => {
    setSelectedCropType(undefined);
    setSelectedCompany(
      companies.find((company) => company.id.toString() === companyId)
    );
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
    selectCompany,
    selectCropType,
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
