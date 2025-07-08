import { z } from "zod";

export const createPurchaseOrderItemSchema = z.object({
  productId: z.number(),
  productCompanyId: z.number(),
  quantity: z.number(),
  orderDate: z.date(),
  note: z.string().optional(),
});

export const createPurchaseOrderSchema = z.object({
  isQuote: z.boolean(),
  isSimple: z.boolean(),
  purchaseOrderName: z.string().optional(),
  items: z
    .array(createPurchaseOrderItemSchema)
    .min(1, "At least one item is required"),
});
