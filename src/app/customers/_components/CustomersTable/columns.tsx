import { ColumnDef } from "@tanstack/react-table";
import { CustomerWithPurchaseOrders } from "@/types/customer";
import CreateQuote from "./CreateQuote";
import CreatePurchaseOrder from "./CreatePurchaseOrder";
import PurchaseOrders from "./PurchaseOrders";
import Quotes from "./Quotes";

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

      return quotes.length > 0 ? <Quotes quotes={quotes} /> : <CreateQuote />;
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
        <PurchaseOrders purchaseOrders={purchaseOrders} />
      ) : (
        <CreatePurchaseOrder />
      );
    },
  },
];
