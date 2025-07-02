import { useState } from "react";
import { IconCheck, IconChevronDown } from "@tabler/icons-react";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Command, CommandInput, CommandItem, CommandList } from "./ui/command";

interface ComboboxProps {
  value: string | number;
  onValueChange: (value: string) => void;
  options: { value: string; label: string }[];
}

export default function Combobox({
  value,
  options,
  onValueChange,
}: ComboboxProps) {
  // const [innerValue, setValue] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          role="combobox"
          variant="outline"
          className="w-[200px] justify-between"
          aria-expanded={open}
        >
          {value
            ? options.find((option) => option.value === value)?.label
            : "Select an option"}
          <IconChevronDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search" className="h-9" />
          <CommandList>
            {options.map((option) => (
              <CommandItem
                key={option.value}
                value={option.value.toString()}
                onSelect={(currentValue) => {
                  onValueChange(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                {option.label}
                <IconCheck
                  className={cn(
                    "ml-auto",
                    value === option.value ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
