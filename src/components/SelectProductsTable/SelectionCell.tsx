import { TableCell } from "../ui/table";
import { SeedFilter } from "./Filters/useSeedProductFiltering";
import { RegularFilter } from "./Filters/useRegularProductFiltering";

type Filter = SeedFilter | RegularFilter;

interface SelectionCellProps<T extends Filter> {
  filters: T;
  filterKey: keyof T;
  filteringOptions: string[];
  onSelectFilter: (key: keyof T, value: string) => void;
}

export default function SelectionCell<T extends Filter>({
  filterKey,
  filters,
  onSelectFilter,
  filteringOptions,
}: SelectionCellProps<T>) {
  return (
    <TableCell className="flex-1 h-[300px] flex flex-col p-0 border-r border-r-border overflow-y-scroll">
      {filteringOptions.map((option, index) => (
        <span
          key={`${String(filterKey)}-${index}`}
          onClick={() => onSelectFilter(filterKey, option)}
          className={`p-2 cursor-pointer hover:bg-gray-200 ${
            filters[filterKey] === option ? "bg-gray-300" : ""
          }`}
        >
          {option}
        </span>
      ))}
    </TableCell>
  );
}
