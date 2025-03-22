import { formatPhoneNumber } from "@/utils/formatting/phone";
import { FormField } from "@/components/layout/combo-form-field";
import { SelectStatus } from "@/components/layout/selects/status";
import { SelectChurches } from "@/components/layout/selects/church";
import { SelectMinistry } from "@/components/layout/selects/ministry";
import { RegisterFormsProps, useRegisterForm } from "./use-register-form";
import { SelectInstrument } from "@/components/layout/selects/instrument";
import { ButtonLoadingComponent } from "@/components/layout/button-loading";

export function FormNewMusician({ closed }: RegisterFormsProps) {
  const { register, handleSubmit, errors, isPending, setValue, onSubmit } = useRegisterForm({
    closed: closed,
  });

  const handleOptionSelect = (id: string, field: string) => {
    setValue(`id_${field}` as "name" | "phone" | "id_church" | "id_ministry" | "id_instrument" | "id_status", id);
  };

  return (
    <form className="space-y-5 mt-3" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <FormField label="Nome Completo" type="name" placeholder="abcd" {...register("name")} />
          {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
        </div>

        <div className="grid gap-2">
          <FormField
            label="Telefone"
            type="phone"
            placeholder="(00) 00000-0000"
            {...register("phone", {
              onChange: (e) => {
                const formattedPhone = formatPhoneNumber(e.target.value);
                setValue("phone", formattedPhone);
              },
            })}
          />
          {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}
        </div>

        <div className="grid gap-2">
          <SelectChurches onSelectedOption={(id) => handleOptionSelect(id, "church")} />
          {errors.id_church && <span className="text-red-500 text-sm">{errors.id_church?.message}</span>}
        </div>

        <div className="grid gap-2">
          <SelectMinistry options='all-musicians' onSelectedOption={(id) => handleOptionSelect(id, "ministry")} />
          {errors.id_ministry && <span className="text-red-500 text-sm">{errors.id_ministry?.message}</span>}
        </div>

        <div className="grid gap-2">
          <SelectInstrument option='musician' onSelectedOption={(id) => handleOptionSelect(id, "instrument")} />
          {errors.id_instrument && <span className="text-red-500 text-sm">{errors.id_instrument?.message}</span>}
        </div>

        <div className="grid gap-2">
          <SelectStatus onSelectedOption={(id) => handleOptionSelect(id, "status")} />
          {errors.id_status && <span className="text-red-500 text-sm">{errors.id_status?.message}</span>}
        </div>

        <ButtonLoadingComponent loading={isPending} nameButton="Cadastrar" />
      </div>
    </form>
  );
}
