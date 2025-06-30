import { Prisma } from "../../generated/prisma";

export const costumerWithPurchaseOrders =
  Prisma.validator<Prisma.CustomerDefaultArgs>()({
    include: {
      PurchaseOrder: true,
    },
  });

export type CustomerWithPurchaseOrders = Prisma.CustomerGetPayload<
  typeof costumerWithPurchaseOrders
>;
