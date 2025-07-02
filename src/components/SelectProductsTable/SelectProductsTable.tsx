import { z } from "zod";
import { UseFormReturn } from "react-hook-form";

import Combobox from "../Combobox";
import useSelectProductsTable from "./useSelectProductsTable";
import { createPurchaseOrderSchema } from "@/schemas/purchaseOrderSchema";
import {
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableFooter,
  TableHeader,
} from "../ui/table";
import { Button } from "../ui/button";
import ColumnHeader, { columns } from "./ColumnHeader";

interface SelectProductsTableProps {
  form: UseFormReturn<z.infer<typeof createPurchaseOrderSchema>>;
}

export default function SelectProductsTable({
  form,
}: SelectProductsTableProps) {
  const {
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
      <Table>
        <TableHeader>
          <TableRow className="flex">
            {columns.map((column) => (
              <ColumnHeader key={column.key} title={column.title} />
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="flex">
            <TableCell className="flex-1 h-[300px] flex flex-col p-0 border-r border-r-border">
              <span className="p-2">CONV</span>
              <span className="bg-gray-300 p-2">CONV/WAXY</span>
              <span className="p-2">CONV/WHITE</span>
              <span className="p-2">DGVT2PRIB</span>
              <span className="p-2">RR2</span>
            </TableCell>
            <TableCell className="flex-1 h-[300px] flex flex-col p-0 border-r border-r-border">
              <span className="p-2">DKC081-18RIB</span>
              <span className="p-2">DKC084-15RIB</span>
              <span className="p-2">DKC093-77RIB</span>
              <span className="p-2 bg-gray-300">DKC099-11RIB</span>
              <span className="p-2">DKC101-35RIB</span>
            </TableCell>
            <TableCell className="flex-1 h-[300px] flex flex-col p-0 border-r border-r-border"></TableCell>
            <TableCell className="flex-1 h-[300px] flex flex-col p-0 border-r border-r-border"></TableCell>
            <TableCell className="flex-1 h-[300px] flex flex-col p-0 border-r border-r-border"></TableCell>
            <TableCell className="flex-1 h-[300px] flex flex-col p-0 border-r border-r-border"></TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell className="flex">
              <Button variant={"outline"} className="ml-auto">
                Select
              </Button>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
