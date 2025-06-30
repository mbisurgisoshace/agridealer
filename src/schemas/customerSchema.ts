import { z } from "zod";

export const createCustomerSchema = z.object({
  name: z.string().min(1, "Name is required"),
  street1: z.string().optional(),
  street2: z.string().optional(),
  state: z.string().optional(),
  city: z.string().optional(),
  zip: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().email("Email is required"),
});
