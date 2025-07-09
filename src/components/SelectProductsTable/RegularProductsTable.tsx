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
import { Textarea } from "../ui/textarea";
import SelectionCell from "./SelectionCell";
import { Product, Regular } from "./useSelectProductsTable";
import ColumnHeader, { regularProductColumns } from "./ColumnHeader";
import useRegularProductFiltering from "./Filters/useRegularProductFiltering";

interface RegularProductsTableProps {
  product?: Regular;
  products: Product[];
  productNote?: string;
  productQuantity?: number;
  onAddProduct: (product: Product, quantity: number, comment: string) => void;
  onUpdateProduct?: (
    product: Product,
    quantity: number,
    comment: string
  ) => void;
}

export default function RegularProductsTable({
  product,
  products,
  onAddProduct,
  onUpdateProduct,
  productNote = "",
  productQuantity = 0,
}: RegularProductsTableProps) {
  const {
    reset,
    filters,
    setFilters,
    selectedProduct,
    filteringOptions,
    onFilterValueChange,
  } = useRegularProductFiltering(products as Regular[]);

  const [comment, setComment] = useState<string>(productNote);
  const [quantity, setQuantity] = useState<number>(productQuantity);

  useEffect(() => {
    if (!selectedProduct && !product) {
      setQuantity(0);
      setComment("");
    }
  }, [selectedProduct]);

  useEffect(() => {
    if (product) {
      setFilters({
        product: product.product,
        type: product.type || "-",
        description: product.description || "-",
      });
    }
  }, [product]);

  const onSelectProduct = () => {
    if (!selectedProduct) return;
    if (quantity <= 0) return;

    if (product && onUpdateProduct) {
      onUpdateProduct(selectedProduct, quantity, comment);
    } else {
      onAddProduct(selectedProduct, quantity, comment);
      reset();
    }
  };

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

                <Textarea
                  value={comment}
                  className="mt-2"
                  placeholder="Comment"
                  onChange={(e) => setComment(e.target.value)}
                />
              </div>
            ) : null}
          </TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell className="flex">
            <Button
              type="button"
              variant={"outline"}
              className="ml-auto"
              onClick={onSelectProduct}
            >
              {product ? "Update" : "Select"}
            </Button>
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
