import { useEffect, useState } from "react";
import { CropType, ProductCompany } from "../../../generated/prisma";
import { getCompanies } from "@/services/Companies";

export default function useSelectProductsTable() {
  const [companies, setCompanies] = useState<ProductCompany[]>([]);

  async function fetchCompanies() {
    const companies = await getCompanies();
    setCompanies(companies);
  }

  useEffect(() => {
    fetchCompanies();
  }, []);

  return {
    companies: companies.map((company) => ({
      label: company.name,
      value: company.id.toString(),
    })),
    cropTypes: Object.values(CropType).map((type) => ({
      label: type,
      value: type,
    })),
  };
}
