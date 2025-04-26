import { SelectChurches } from "@/components/layout/selects/church";
import { useCreateForm } from "./use-create-form";
import { DateFieldEssays } from "./fields/date";
import { AssigningResponsible } from "./fields/assigning-responsible";
import { MinistryProfileSelect } from "./fields/ministry-profile";
import { ListPresenceMusician } from "./fields/presence-musician";
import { ButtonLoadingComponent } from "@/components/layout/button-loading";

export interface RegisterCreateProps {
  closed: () => void;
}

export function FormCreateEssays({ closed }: RegisterCreateProps) {
  const { errors } = useCreateForm({
    closed: closed,
  });

  const isPending = false;

  return (
    <form className="flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <DateFieldEssays />

        <div className="grid gap-2">
          <SelectChurches onSelectedOption={(id) => console.log(id)} />
          {errors.id_church && <span className="text-red-500 text-sm">{errors.id_church?.message}</span>}
        </div>

        <AssigningResponsible />

        <MinistryProfileSelect />
      </div>

      <ListPresenceMusician />

      <ButtonLoadingComponent loading={isPending} nameButton="Cadastrar" />
    </form>
  );
}
