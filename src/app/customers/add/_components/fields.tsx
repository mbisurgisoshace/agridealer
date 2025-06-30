import { z } from "zod";
import { ComponentType } from "react";

import { Input } from "@/components/ui/input";
import { createCustomerSchema } from "@/schemas/customerSchema";

type Field = {
  label: string;
  component: ComponentType<any>;
  name: keyof z.infer<typeof createCustomerSchema>;
};

export const fields: Field[] = [
  { name: "name", label: "Name", component: Input },
  { name: "street1", label: "Street 1", component: Input },
  { name: "street2", label: "Street 2", component: Input },
  { name: "state", label: "State", component: Input },
  { name: "city", label: "City", component: Input },
  { name: "zip", label: "Zip Code", component: Input },
  { name: "phone", label: "Phone", component: Input },
  { name: "email", label: "Email", component: Input },
];
