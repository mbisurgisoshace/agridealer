import PurchaseOrderQuoteForm from "./PurchaseOrderQuoteForm";

interface CreatePurchaseOrderProps {
  customerId: number;
}

export default function CreatePurchaseOrder({
  customerId,
}: CreatePurchaseOrderProps) {
  return (
    <PurchaseOrderQuoteForm
      isQuote={false}
      customerId={customerId}
      title="Create Purchase Order"
    />
  );
}
