import { SelectChurches } from "@/components/layout/selects/church";
import { useCreateForm } from "./use-create-form";
import { DateFieldEssays } from "./fields/date";
import { AssigningResponsible } from "./fields/assigning-responsible";

export interface RegisterCreateProps {
  closed: () => void;
}

export function FormCreateEssays({ closed }: RegisterCreateProps) {
  const { errors, setValue } = useCreateForm({
    closed: closed,
  });

  const handleOptionSelect = (id: string, field: string) => {
    setValue(`id_${field}` as "name" | "phone" | "id_church" | "id_ministry" | "id_instrument" | "id_status", id);
  };

  return (
    <form action="flex flex-col">
      <div className="grid gap-2 mb-5">
        <DateFieldEssays />
      </div>

      <div className="grid gap-2 mb-5">
        <SelectChurches onSelectedOption={(id) => handleOptionSelect(id, "church")} />
        {errors.id_church && <span className="text-red-500 text-sm">{errors.id_church?.message}</span>}
      </div>

      <div className="">
        <AssigningResponsible />
      </div>
    </form>
  );
}
