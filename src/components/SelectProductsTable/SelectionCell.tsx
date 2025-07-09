import { useState } from "react";
import { TableCell } from "../ui/table";
import { SeedFilter } from "./Filters/useSeedProductFiltering";
import { RegularFilter } from "./Filters/useRegularProductFiltering";
import { Input } from "../ui/input";

type Filter = SeedFilter | RegularFilter;

interface SelectionCellProps<T extends Filter> {
  filters: T;
  filterKey: keyof T;
  filterable?: boolean;
  filteringOptions: string[];
  onSelectFilter: (key: keyof T, value: string) => void;
}

export default function SelectionCell<T extends Filter>({
  filters,
  filterKey,
  onSelectFilter,
  filteringOptions,
  filterable = false,
}: SelectionCellProps<T>) {
  const [filterValue, setFilterValue] = useState("");

  return (
    <TableCell className="flex-1 h-[300px] flex flex-col p-0 border-r border-r-border overflow-y-scroll">
      {filterable && (
        <div className="p-1">
          <Input
            value={filterValue}
            className="h-7 rounded-sm"
            onChange={(e) => setFilterValue(e.target.value)}
          />
        </div>
      )}
      {filteringOptions
        .filter((option) => {
          if (!filterValue) return true; // Show all options if no filter value
          return option.toLowerCase().includes(filterValue.toLowerCase());
        })
        .map((option, index) => (
          <span
            key={`${String(filterKey)}-${index}`}
            onClick={() => {
              setFilterValue("");
              onSelectFilter(filterKey, option);
            }}
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
