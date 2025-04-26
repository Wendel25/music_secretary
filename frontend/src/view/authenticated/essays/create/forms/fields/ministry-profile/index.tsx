import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useDataForSelect } from "./fetch-data-select";

export function MinistryProfileSelect() {
  const { data } = useDataForSelect();

  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor="select" className="font-medium">
        Ministério Presente
      </Label>

      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Selecione uma opção" />
        </SelectTrigger>
        <SelectContent>
          {data?.map((item) => (
            <SelectItem key={item.id} value={item.id}>
              {item.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
