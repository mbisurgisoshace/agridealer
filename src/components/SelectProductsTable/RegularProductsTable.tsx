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
import { Product, Regular } from "./useSelectProductsTable";
import ColumnHeader, { regularProductColumns } from "./ColumnHeader";
import useRegularProductFiltering from "./Filters/useRegularProductFiltering";

interface RegularProductsTableProps {
  products: Product[];
}

export default function RegularProductsTable({
  products,
}: RegularProductsTableProps) {
  const { filters, selectedProduct, filteringOptions, onFilterValueChange } =
    useRegularProductFiltering(products as Regular[]);

  const [quantity, setQuantity] = useState<number>(0);

  useEffect(() => {
    if (!selectedProduct) setQuantity(0);
  }, [selectedProduct]);

  return (
    <Table>
      <TableHeader>
        <TableRow className="flex">
          {regularProductColumns.map((column) => (
            <ColumnHeader key={column.key} title={column.title} />
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow className="flex hover:bg-white">
          <SelectionCell
            filters={filters}
            filterKey="product"
            onSelectFilter={onFilterValueChange}
            filteringOptions={filteringOptions.product}
          />
          <SelectionCell
            filters={filters}
            filterKey="type"
            onSelectFilter={onFilterValueChange}
            filteringOptions={filteringOptions.type}
          />
          <SelectionCell
            filters={filters}
            filterKey="description"
            onSelectFilter={onFilterValueChange}
            filteringOptions={filteringOptions.description}
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
            <Button variant={"outline"} className="ml-auto">
              Select
            </Button>
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
