import numeral from "numeral";
import { useEffect, useState } from "react";

import {
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableFooter,
  TableHeader,
} from "../ui/table";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import SelectionCell from "./SelectionCell";
import { CropType } from "../../../generated/prisma";
import { Product, Seed } from "./useSelectProductsTable";
import ColumnHeader, { seedProductColumns } from "./ColumnHeader";
import useSeedProductFiltering from "./Filters/useSeedProductFiltering";

interface SeedProductsTableProps {
  products: Product[];
  cropType?: CropType;
  onAddProduct: (product: Product, quantity: number) => void;
}

export default function SeedProductsTable({
  cropType,
  products,
  onAddProduct,
}: SeedProductsTableProps) {
  const {
    reset,
    filters,
    selectedProduct,
    filteringOptions,
    onFilterValueChange,
  } = useSeedProductFiltering(products as Seed[], cropType);

  const [quantity, setQuantity] = useState<number>(0);

  useEffect(() => {
    if (!selectedProduct) setQuantity(0);
  }, [selectedProduct]);

  const onSelectProduct = () => {
    if (!selectedProduct) return;
    if (quantity <= 0) return;

    onAddProduct(selectedProduct, quantity);
    reset();
  };

  return (
    <Table>
      <TableHeader>
        <TableRow className="flex">
          {seedProductColumns.map((column) => (
            <ColumnHeader key={column.key} title={column.title} />
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow className="flex hover:bg-white">
          <SelectionCell
            filters={filters}
            filterKey="trait"
            onSelectFilter={onFilterValueChange}
            filteringOptions={filteringOptions.trait}
          />
          <SelectionCell
            filters={filters}
            filterKey="variety"
            onSelectFilter={onFilterValueChange}
            filteringOptions={filteringOptions.variety}
          />
          <SelectionCell
            filters={filters}
            filterKey="treatment"
            onSelectFilter={onFilterValueChange}
            filteringOptions={filteringOptions.treatment}
          />
          <SelectionCell
            filters={filters}
            filterKey="seedSize"
            onSelectFilter={onFilterValueChange}
            filteringOptions={filteringOptions.seedSize}
          />
          <SelectionCell
            filters={filters}
            filterKey="packaging"
            onSelectFilter={onFilterValueChange}
            filteringOptions={filteringOptions.packaging}
          />
          <TableCell className="flex-1 h-[300px] flex flex-col p-0 border-r border-r-border">
            {selectedProduct ? (
              <div className="p-2 ">
                <div className="flex flex-row items-center gap-2">
                  <Input
                    type="number"
                    value={quantity}
                    className="h-6 rounded-sm"
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                  />
                  <span>units</span>
                </div>
                <span className="text-xs">{`MSRP: ${numeral(
                  selectedProduct.endUserPricing
                ).format("$0,0.00")}`}</span>
              </div>
            ) : null}
          </TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell className="flex">
            <Button
              variant={"outline"}
              className="ml-auto"
              onClick={onSelectProduct}
            >
              Select
            </Button>
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
