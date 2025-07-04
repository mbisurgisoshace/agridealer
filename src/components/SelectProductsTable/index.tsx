import { z } from "zod";
import { UseFormReturn } from "react-hook-form";

import Combobox from "../Combobox";
import SeedProductsTable from "./SeedProductsTable";
import RegularProductsTable from "./RegularProductsTable";
import useSelectProductsTable from "./useSelectProductsTable";
import { createPurchaseOrderSchema } from "@/schemas/purchaseOrderSchema";

interface SelectProductsTableProps {
  form: UseFormReturn<z.infer<typeof createPurchaseOrderSchema>>;
}

export default function SelectProductsTable({}: SelectProductsTableProps) {
  const {
    products,
    cropTypes,
    companies,
    selectCompany,
    selectCropType,
    selectedCompany,
    selectedCropType,
  } = useSelectProductsTable();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <Combobox
          options={companies}
          value={selectedCompany?.id.toString() || ""}
          onValueChange={(companyId) => selectCompany(companyId)}
        />
        {cropTypes.length > 0 && (
          <Combobox
            options={cropTypes}
            value={selectedCropType || ""}
            onValueChange={(cropType) => selectCropType(cropType)}
          />
        )}
      </div>
      {selectedCompany &&
        (selectedCompany.companyType !== "Regular" ? (
          <SeedProductsTable products={products} cropType={selectedCropType} />
        ) : (
          <RegularProductsTable products={products} />
        ))}
    </div>
  );
}
