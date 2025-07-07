import numeral from "numeral";
import { ColumnDef } from "@tanstack/react-table";

import { ProductView } from "@/types/products";
import { IconDotsVertical } from "@tabler/icons-react";

export type OrderProductView = ProductView & {
  quantity: number;
};

export const columns: ColumnDef<OrderProductView>[] = [
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
  },
  {
    id: "actions",
    cell: () => {
      return (
        <span>
          <IconDotsVertical size={18} />
        </span>
      );
    },
  },
];
