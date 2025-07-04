import { TableHead } from "../ui/table";

interface ColumnHeaderProps {
  title: string;
}

export default function ColumnHeader({ title }: ColumnHeaderProps) {
  return (
    <TableHead className="flex-1 flex p-0 border-r border-r-border">
      <span className="p-2">{title}</span>
    </TableHead>
  );
}

export const seedProductColumns = [
  {
    key: "traits",
    title: "Traits",
  },
  {
    key: "variety",
    title: "Variety",
  },
  {
    key: "treatment",
    title: "Treatment",
  },
  {
    key: "seedSize",
    title: "Seed Size",
  },
  {
    key: "packaging",
    title: "Packaging",
  },
  {
    key: "quantityAndMsrp",
    title: "Quantity and MSRP",
  },
];

export const regularProductColumns = [
  {
    key: "product",
    title: "Product",
  },
  {
    key: "type",
    title: "Type",
  },
  {
    key: "description",
    title: "Description",
  },
  {
    key: "quantityAndMsrp",
    title: "Quantity and MSRP",
  },
];
