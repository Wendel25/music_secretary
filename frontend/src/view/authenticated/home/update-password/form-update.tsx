import { Label } from "@/components/ui/label";
import { useUpdatePasswordForm } from "./use-update-password";
import { PasswordField } from "@/components/layout/password-field";
import { ButtonLoadingComponent } from "@/components/layout/button-loading";

export function FormUpdatePassword() {
  const { register, handleSubmit, errors, isPending, onSubmit } = useUpdatePasswordForm();
  
  return (
    <form className="space-y-5 mt-3" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-2">
        <Label htmlFor="password" className="flex items-center gap-1">
          Senha
        </Label>
        <PasswordField id="password" placeholder="Digite a nova senha" {...register("password")} />
        {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="confirmPassword" className="flex items-center gap-1">
          Confirme a Senha
        </Label>
        <PasswordField id="confirmPassword" placeholder="Confirme sua senha" {...register("confirmPassword")} />
        {errors.confirmPassword && <span className="text-red-500 text-sm">{errors.confirmPassword.message}</span>}
      </div>

      <ButtonLoadingComponent loading={isPending} />
    </form>
  );
}
