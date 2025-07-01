import { z } from "zod";

export const createPurchaseOrderSchema = z.object({
  pruchaseOrderName: z.string().optional(),
  isSimple: z.boolean().default(false),
});
