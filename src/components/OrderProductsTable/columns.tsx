import numeral from "numeral";
import { ColumnDef } from "@tanstack/react-table";

import ActionsMenu from "./ActionsMenu";
import { ProductView } from "@/types/products";

export type OrderProductView = ProductView & {
  orderDate?: Date;
  quantity: number;
  orderItemId?: number;
};

export const columns: (isEditable: boolean) => ColumnDef<OrderProductView>[] = (
  isEditable
) => [
  {
    accessorKey: "product",
    header: "Product",
    cell: ({ row }) => {
      return (
        <span className="flex flex-col">
          <span className="text-muted-foreground">
            {row.original.productCompanyName}
          </span>
          <span>{row.original.description}</span>
        </span>
      );
    },
    size: 300,
  },
  {
    id: "quantity",
    header: "No. of Units",
    cell: ({ row }) => {
      return <span>{numeral(row.original.quantity).format("0,0")}</span>;
    },
  },
  {
    id: "msrp",
    header: "MSRP",
    cell: ({ row }) => {
      return (
        <span>{numeral(row.original.endUserPricing).format("$0,0.00")}</span>
      );
    },
    size: 100,
  },
  {
    id: "pre-total",
    header: "Pre-Total",
    cell: ({ row }) => {
      return (
        <span>
          {numeral(row.original.quantity * row.original.endUserPricing).format(
            "$0,0.00"
          )}
        </span>
      );
    },
    size: 100,
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return isEditable ? <ActionsMenu orderItem={row.original} /> : null;
    },
    size: 50,
  },
];
