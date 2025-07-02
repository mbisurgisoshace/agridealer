import { z } from "zod";

export const createPurchaseOrderItemSchema = z.object({
  productId: z.number(),
  productCompanyId: z.number(),
  quantity: z.number(),
  note: z.string().optional(),
});

export const createPurchaseOrderSchema = z.object({
  pruchaseOrderName: z.string().optional(),
  isSimple: z.boolean().default(false),
  items: z.array(createPurchaseOrderItemSchema),
});
