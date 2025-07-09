import { z } from "zod";
import { useState } from "react";
import { useFieldArray, UseFormReturn } from "react-hook-form";

import Combobox from "../Combobox";
import { Datepicker } from "../Datepicker";
import SeedProductsTable from "./SeedProductsTable";
import OrderProductsTable from "../OrderProductsTable";
import RegularProductsTable from "./RegularProductsTable";
import { FormField, FormItem, FormMessage } from "../ui/form";
import { OrderProductView } from "../OrderProductsTable/columns";
import { createPurchaseOrderSchema } from "@/schemas/purchaseOrderSchema";
import useSelectProductsTable, { Product } from "./useSelectProductsTable";

interface SelectProductsTableProps {
  form: UseFormReturn<z.infer<typeof createPurchaseOrderSchema>>;
}

export default function SelectProductsTable({
  form,
}: SelectProductsTableProps) {
  const {
    products,
    cropTypes,
    companies,
    allProducts,
    selectCompany,
    selectCropType,
    selectedCompany,
    selectedCropType,
  } = useSelectProductsTable();
  const [orderItemDate, setOrderItemDate] = useState<Date | undefined>(
    new Date()
  );

  const { fields, append } = useFieldArray({
    control: form.control,
    name: "items",
  });

  const onAddProduct = (product: Product, quantity: number, note: string) => {
    if (!selectedCompany) return;

    const newItem = {
      note,
      quantity,
      productId: product.id,
      orderDate: orderItemDate!,
      productCompanyId: selectedCompany.id,
    };

    append(newItem);
    setOrderItemDate(new Date());
  };

  const generateData = (): OrderProductView[] => {
    return fields.map((item) => {
      const product = allProducts.find(
        (p) =>
          p.id === item.productId &&
          p.productCompanyId === item.productCompanyId
      );
      return {
        ...product!,
        description: product?.description || "-",
        quantity: item.quantity,
        note: item.note,
      };
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <Datepicker value={orderItemDate!} onChange={setOrderItemDate} />
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
        (selectedCompany.companyType === "Regular" ? (
          <RegularProductsTable
            products={products}
            onAddProduct={onAddProduct}
          />
        ) : (
          <SeedProductsTable
            products={products}
            cropType={selectedCropType}
            onAddProduct={onAddProduct}
          />
        ))}
      <OrderProductsTable data={generateData()} />
      <FormField
        control={form.control}
        key={"items"}
        name={"items"}
        render={() => (
          <FormItem>
            <FormMessage className="font-semibold text-xs" />
          </FormItem>
        )}
      />
    </div>
  );
}
