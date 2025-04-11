import { DateComponent } from "@/components/ui/date-component";
import { Label } from "@/components/ui/label";

export function DateFieldEssays() {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor="select" className="font-medium">
        Selecione a data
      </Label>
      <DateComponent />
    </div>
  );
}
