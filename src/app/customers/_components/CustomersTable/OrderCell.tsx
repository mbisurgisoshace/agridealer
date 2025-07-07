import Link from "next/link";

import { PurchaseOrder } from "../../../../../generated/prisma";

import { Button } from "@/components/ui/button";

interface OrderCellProps {
  orders: PurchaseOrder[];
}

export default function OrdersCell({ orders }: OrderCellProps) {
  return (
    <div className="flex flex-col">
      {orders.map((order) => (
        <Link
          key={order.id}
          href={`/customers/${order.customerId}/orders/${order.id}`}
        >
          <Button
            size={"sm"}
            variant={"link"}
            className="text-foreground w-fit px-0 text-left"
          >
            {`${order.isQuote ? "QT" : "PO"}# ${order.id}`}
          </Button>
        </Link>
      ))}
    </div>
  );
}
