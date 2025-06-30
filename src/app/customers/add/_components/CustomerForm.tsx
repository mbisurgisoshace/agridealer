"use client";

import { z } from "zod";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormItem,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import { fields } from "./fields";
import { createCustomer } from "@/services/Customers";
import { createCustomerSchema } from "@/schemas/customerSchema";

export default function CustomerForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof createCustomerSchema>>({
    resolver: zodResolver(createCustomerSchema),
    defaultValues: {
      name: "",
      street1: "",
      street2: "",
      state: "",
      city: "",
      zip: "",
      phone: "",
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof createCustomerSchema>) {
    try {
      const newCustomerId = await createCustomer(values);
      form.reset();
      router.push(`/customers/${newCustomerId}`);
    } catch (error) {
      console.log("Error creating customer:", error);
      toast.error("Failed to create customer. Please try again.");
    }
  }

  const { isValid, isSubmitting } = form.formState;

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col space-y-4 md:max-w-[560px] ml-auto mr-auto"
      >
        {fields.map((customerFormField) => (
          <FormField
            control={form.control}
            key={customerFormField.name}
            name={customerFormField.name}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{customerFormField.label}</FormLabel>
                <FormControl>
                  <customerFormField.component {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <Button
          type="submit"
          className="cursor-pointer ml-auto"
          disabled={!isValid || isSubmitting}
        >
          Create Customer
        </Button>
      </form>
    </Form>
  );
}
