import { SelectOptions } from "@/components/layout/selects/select-options";
import { RegisterDataInterface as InstrumentInterface } from "@/interfaces/registers";

interface SelectOptionProps {
  onSelectedOption: (id: string) => void;
}

export function SelectStatus({ onSelectedOption }: SelectOptionProps) {
  return (
    <SelectOptions<InstrumentInterface>
      title="Selecione o status"
      route={"status"}
      onSelect={(status) => onSelectedOption(status.id)}
      getItemLabel={(item) => item.value}
      getItemValue={(item) => item.id}
    />
  );
}
