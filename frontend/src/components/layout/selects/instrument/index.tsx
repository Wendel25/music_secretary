import { instrumentFilters } from "./options-filter";
import { SelectOptions } from "@/components/layout/selects/select-options";
import { RegisterDataInterface as InstrumentInterface } from "@/interfaces/registers";

interface SelectInstrumentProps {
  option: string;
  onSelectedOption: (id: string) => void;
}

export function SelectInstrument({ option, onSelectedOption }: SelectInstrumentProps) {
  const filterFunction = instrumentFilters[option as keyof typeof instrumentFilters];

  return (
    <SelectOptions<InstrumentInterface>
      title="Selecione o instrumento"
      route={"instrument"}
      onSelect={(instrument) => onSelectedOption(instrument.id)}
      getItemLabel={(item) => item.value}
      getItemValue={(item) => item.id}
      filterOptions={filterFunction}
    />
  );
}
