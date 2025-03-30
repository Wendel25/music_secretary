import { formatPhoneNumber } from "@/utils/formatting/phone";
import { FormField } from "@/components/layout/combo-form-field";
import { SelectStatus } from "@/components/layout/selects/status";
import { MinistriesType, UseForType } from "@/interfaces/data-user";
import { SelectChurches } from "@/components/layout/selects/church";
import { SelectMinistry } from "@/components/layout/selects/ministry";
import { SelectInstrument } from "@/components/layout/selects/instrument";
import { ButtonLoadingComponent } from "@/components/layout/button-loading";
import { useRegisterForm } from "@/components/layout/register-new-musician/use-register-form";

export interface RegisterFormsFieldsProps {
  closed: () => void;
  ministry: MinistriesType;
  useFor: UseForType;
}

export function FormNewMusician({ closed, ministry, useFor }: RegisterFormsFieldsProps) {
  const { register, handleSubmit, errors, isPending, setValue, onSubmit } = useRegisterForm({
    closed: closed,
    route: useFor,
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
          <SelectMinistry options={ministry} onSelectedOption={(id) => handleOptionSelect(id, "ministry")} />
          {errors.id_ministry && <span className="text-red-500 text-sm">{errors.id_ministry?.message}</span>}
        </div>

        <div className="grid gap-2">
          <SelectInstrument option={useFor} onSelectedOption={(id) => handleOptionSelect(id, "instrument")} />
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
