import { ColumnDef } from "@tanstack/react-table";

import { CustomerWithPurchaseOrders } from "@/types/customer";

import OrdersCell from "./OrderCell";
import CreateQuote from "./CreateQuote";
import CreatePurchaseOrder from "./CreatePurchaseOrder";

export const columns: ColumnDef<CustomerWithPurchaseOrders>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    id: "quotes",
    header: "Quotes",
    cell: ({ row }) => {
      const quotes = row.original.PurchaseOrder.filter((po) => po.isQuote);

      return quotes.length > 0 ? (
        <OrdersCell orders={quotes} />
      ) : (
        <CreateQuote customerId={row.original.id} />
      );
    },
  },
  {
    id: "purchaseOrders",
    header: "Purchase Orders",
    cell: ({ row }) => {
      const purchaseOrders = row.original.PurchaseOrder.filter(
        (po) => !po.isQuote
      );

      return purchaseOrders.length > 0 ? (
        <OrdersCell orders={purchaseOrders} />
      ) : (
        <CreatePurchaseOrder customerId={row.original.id} />
      );
    },
  },
];
