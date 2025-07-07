import PurchaseOrderQuoteForm from "./PurchaseOrderQuoteForm";

interface CreateQuoteProps {
  customerId: number;
}

export default function CreateQuote({ customerId }: CreateQuoteProps) {
  return (
    <PurchaseOrderQuoteForm
      isQuote={true}
      title="Create Quote"
      customerId={customerId}
    />
  );
}
