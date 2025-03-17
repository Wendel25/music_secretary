import { Mail } from "lucide-react";
import { useLoginForm } from "./use-login";
import { Label } from "@/components/ui/label";
import { FormField } from "@/components/layout/combo-form-field";
import { PasswordField } from "@/components/layout/password-field";
import { ButtonLoadingComponent } from "@/components/layout/button-loading";

export function FormLogin() {
  const { register, handleSubmit, errors, isPending, onSubmit } = useLoginForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <FormField
            label="Email"
            type="email"
            placeholder="abc@gmail.com"
            trailingIcon={Mail}
            {...register("email")}
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
        </div>

        <div className="grid gap-2">
          <Label htmlFor="password" className="flex items-center gap-1">
            Senha
          </Label>
          <PasswordField id="password" placeholder="Digite sua senha" {...register("password")} />
          {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
        </div>

        <ButtonLoadingComponent loading={isPending} />
      </div>
    </form>
  );
}
