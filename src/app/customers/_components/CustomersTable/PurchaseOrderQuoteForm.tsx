import { z } from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Card,
  CardTitle,
  CardHeader,
  CardDescription,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Dialog,
  DialogClose,
  DialogTitle,
  DialogHeader,
  DialogFooter,
  DialogTrigger,
  DialogContent,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { createOrder } from "@/services/Orders";
import SelectProductsTable from "@/components/SelectProductsTable";

import { createPurchaseOrderSchema } from "@/schemas/purchaseOrderSchema";

interface PurchaseOrderQuoteFormProps {
  title: string;
  isQuote: boolean;
  customerId: number;
}

export default function PurchaseOrderQuoteForm({
  title,
  isQuote,
  customerId,
}: PurchaseOrderQuoteFormProps) {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const form = useForm<z.infer<typeof createPurchaseOrderSchema>>({
    resolver: zodResolver(createPurchaseOrderSchema),
    defaultValues: {
      isQuote,
      purchaseOrderName: "",
      isSimple: true,
      items: [],
    },
  });

  async function onSubmit(values: z.infer<typeof createPurchaseOrderSchema>) {
    if (step === 0) return setStep((currStep) => currStep + 1);

    try {
      const newOrderId = await createOrder(customerId, values);
      router.push(`/customers/${customerId}/orders/${newOrderId}`);
    } catch (error) {
      console.log("Error submitting purchase order:", error);
    }
  }

  const submitText = step === 0 ? "Proceed" : "Submit";
  const titleText = step === 0 ? "Select View" : "Select Products";

  return (
    <Dialog
      onOpenChange={() => {
        setStep(0);
        form.reset();
      }}
    >
      <Form {...form}>
        <DialogTrigger asChild>
          <Button variant="link" className="text-primary w-fit px-0 text-left">
            {title}
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[1060px]">
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <DialogHeader>
              <DialogTitle>{titleText}</DialogTitle>
            </DialogHeader>
            {step === 0 ? (
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  key={"purchaseOrderName"}
                  name={"purchaseOrderName"}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage className="font-semibold text-xs" />
                    </FormItem>
                  )}
                />

                <FormField
                  key={"isSimple"}
                  control={form.control}
                  name="isSimple"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="grid grid-cols-2 gap-4">
                          <Card
                            onClick={() => field.onChange(true)}
                            className={`border ${
                              field.value === true && "border-primary"
                            } cursor-pointer`}
                          >
                            <CardHeader>
                              <CardTitle>Simple</CardTitle>
                              <CardDescription>
                                Product list is shown irrespective of farms and
                                fields
                              </CardDescription>
                            </CardHeader>
                          </Card>
                          <Card
                            onClick={() => field.onChange(false)}
                            className={`border ${
                              field.value === false && "border-primary"
                            } cursor-pointer`}
                          >
                            <CardHeader>
                              <CardTitle>Advanced</CardTitle>
                              <CardDescription>
                                Product list is grouped by farms and fields
                              </CardDescription>
                            </CardHeader>
                          </Card>
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            ) : (
              <SelectProductsTable form={form} />
            )}
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button
                type={step === 0 ? "button" : "submit"}
                onClick={() => {
                  if (step === 0) {
                    setStep((currStep) => currStep + 1);
                  }
                }}
              >
                {submitText}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Form>
    </Dialog>
  );
}
