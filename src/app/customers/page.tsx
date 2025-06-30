import { getCustomers } from "@/services/Customers";
import AddCustomer from "./_components/AddCustomer";
import CustomersTable from "./_components/CustomersTable";

export default async function CustomersPage() {
  const customers = await getCustomers();

  return (
    <div>
      <div className="w-full flex justify-between items-center">
        <h1 className="text-2xl font-bold mb-4">Customers</h1>
        <AddCustomer />
      </div>
      <CustomersTable data={customers} />
    </div>
  );
}
