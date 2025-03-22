import { ministryFilters } from "./options-select-validation";
import { SelectOptions } from "@/components/layout/selects/select-options";
import { RegisterDataInterface as MinistryInterface } from "@/interfaces/registers";

interface SelectOptionProps {
  options: "all-users" | "all-musicians" | "all-organists";
  onSelectedOption: (id: string) => void;
}

export function SelectMinistry({ options, onSelectedOption }: SelectOptionProps) {
  const filterFunction = ministryFilters[options as keyof typeof ministryFilters];
  
  return (
    <SelectOptions<MinistryInterface>
      title="Selecione o nível"
      route={"ministry"}
      onSelect={(ministry) => onSelectedOption(ministry.id)}
      getItemLabel={(item) => item.value}
      getItemValue={(item) => item.id}
      filterOptions={filterFunction}
    />
  );
}
