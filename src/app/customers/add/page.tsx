import { redirect } from "next/navigation";

import CustomerForm from "./_components/CustomerForm";

export default function AddCustomerPage() {
  return (
    <div>
      <CustomerForm />
    </div>
  );
}
