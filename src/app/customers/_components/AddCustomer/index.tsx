"use client";

import { z } from "zod";
import { toast } from "sonner";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormItem,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import {
  Dialog,
  DialogTitle,
  DialogClose,
  DialogFooter,
  DialogHeader,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { fields } from "./fields";
import { createCustomer } from "@/services/Customers";
import { createCustomerSchema } from "@/schemas/customerSchema";

export default function AddCustomer() {
  const [isOpen, setIsOpen] = useState(false);

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
      await createCustomer(values);
      form.reset();
      setIsOpen(false);
    } catch (error) {
      console.log("Error creating customer:", error);
      toast.error("Failed to create customer. Please try again.");
    }
  }

  return (
    <Dialog
      open={isOpen}
      onOpenChange={() => {
        form.reset();
        setIsOpen(!isOpen);
      }}
    >
      <Form {...form}>
        <DialogTrigger asChild>
          <Button variant="default">Add New</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[760px]">
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <DialogHeader>
              <DialogTitle>Create Customer</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-4 items-start">
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
                      <FormMessage className="font-semibold text-xs" />
                    </FormItem>
                  )}
                />
              ))}
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Save</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Form>
    </Dialog>
  );
}
