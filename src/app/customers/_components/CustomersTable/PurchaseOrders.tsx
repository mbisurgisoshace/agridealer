import Link from "next/link";

import { PurchaseOrder } from "../../../../../generated/prisma";

import { Button } from "@/components/ui/button";

interface PurchaseOrdersProps {
  purchaseOrders: PurchaseOrder[];
}

export default function PurchaseOrders({
  purchaseOrders,
}: PurchaseOrdersProps) {
  console.log("Rendering PurchaseOrders with:", purchaseOrders);

  return (
    <div className="flex flex-col">
      {purchaseOrders.map((po) => (
        <Link key={po.id} href={`/purchase-orders/${po.id}`}>
          <Button
            size={"sm"}
            variant={"link"}
            className="text-foreground w-fit px-0 text-left"
          >
            {`PO# ${po.id}`}
          </Button>
        </Link>
      ))}
    </div>
  );
}
