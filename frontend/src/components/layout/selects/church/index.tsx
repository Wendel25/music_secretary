import { TokenDecode } from "@/utils/token";
import { ChurchInterface } from "@/interfaces/churches";
import { useHasPermission } from "@/hook/use-has-permission";
import { SelectOptions } from "@/components/layout/selects/select-options";

interface SelectOptionProps {
  onSelectedOption: (id: string) => void;
}

export function SelectChurches({ onSelectedOption }: SelectOptionProps) {
  const token = TokenDecode();
  const permission = useHasPermission();

  let route = "";

  if (permission) {
    route = "church";
  } else {
    route = `church?id_city=${token?.church.city.id}`;
  }

  return (
    <SelectOptions<ChurchInterface> 
      title="Selecione a casa de oração"
      route={route}
      onSelect={(church) => onSelectedOption(church.id)}
      getItemLabel={(item) => `${item.name} - ${item.city.name}`}
      getItemValue={(item) => item.id}
    />
  );
}
