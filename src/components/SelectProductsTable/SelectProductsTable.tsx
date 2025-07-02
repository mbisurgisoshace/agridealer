import Combobox from "../Combobox";
import useSelectProductsTable from "./useSelectProductsTable";

interface SelectProductsTableProps {}

export default function SelectProductsTable() {
  const { cropTypes, companies } = useSelectProductsTable();

  return (
    <div>
      <Combobox options={companies} />
      <Combobox options={cropTypes} />
      {/* Add more components or functionality as needed */}
    </div>
  );
}
