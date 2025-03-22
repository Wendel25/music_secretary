import { Label } from "@/components/ui/label";
import { useSelectData } from "@/components/layout/selects/select-options/use-data-options";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface SelectOptionsProps<T> {
  title: string;
  route: string;
  onSelect: (item: T) => void;
  getItemLabel: (item: T) => string;
  getItemValue: (item: T) => string;
  filterOptions?: (items: T[]) => T[];
}

export function SelectOptions<T>({
  title,
  route,
  onSelect,
  getItemLabel,
  getItemValue,
  filterOptions,
}: SelectOptionsProps<T>) {
  const { data } = useSelectData<T>({ route, getItemLabel });

  const filteredData = filterOptions ? filterOptions(data) : data;

  return (
    <>
      <Label htmlFor="select" className="font-medium">
        {title}
      </Label>
      <Select
        onValueChange={(id) => {
          const selectedItem = filteredData.find((item) => getItemValue(item) === id);
          if (selectedItem) {
            onSelect(selectedItem);
          }
        }}
      >
        <SelectTrigger>
          <SelectValue placeholder="Selecione uma opção" />
        </SelectTrigger>
        <SelectContent>
          {filteredData.map((item) => (
            <SelectItem key={getItemValue(item)} value={getItemValue(item)}>
              {getItemLabel(item)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
}
