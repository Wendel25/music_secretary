import { Mail, Phone, User } from "lucide-react";
import { SelectChurches } from "./fields/select-churches";
import { FormField } from "@/components/layout/combo-form-field";

export function FormRegisterUser() {
    const handleCitySelect = (cityId: string) => {
      console.log(cityId);
    };
  
    return (
      <form className="space-y-5 mt-3">
        <div className="grid gap-6">
          <div className="grid gap-2">
            <FormField label="Nome Completo" type="name" placeholder="abcd" trailingIcon={User} />
          </div>

          <div className="grid gap-2">
            <FormField label="Email" type="email" placeholder="abc@gmail.com" trailingIcon={Mail} />
          </div>

          <div className="grid gap-2">
            <FormField label="Telefone" type="phone" placeholder="(00) 00000-0000" trailingIcon={Phone} />
          </div>

          <div className="grid gap-2">
            <SelectChurches onSelectCity={handleCitySelect} />
          </div>
        </div>
      </form>
    );
}