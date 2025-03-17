import { cn } from "@/lib/utils";
import { useLoginForm } from "./use-login";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { LoaderCircle, Mail, Send } from "lucide-react";
import { FormField } from "@/components/layout/combo-form-field";
import { PasswordField } from "@/components/layout/password-field";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function ViewLogin() {
  const { register, handleSubmit, errors, isPending, onSubmit } = useLoginForm();

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="border-none shadow-xl animate-fadeIn">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Bem-vindo!</CardTitle>
            <CardDescription className="text-center">Insira suas credenciais que te foram fornecidas</CardDescription>
          </CardHeader>
          <CardContent>
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

                <Button
                  type="submit"
                  className={cn(
                    "bg-emerald-600 hover:bg-emerald-700 transition-all duration-300",
                    isPending && "animate-pulse"
                  )}
                  disabled={isPending}
                >
                  {isPending ? (
                    <div className="flex items-center gap-2">
                      Aguarde...
                      <LoaderCircle size={17} className="animate-spin" />
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Label>Entrar</Label>
                      <Send />
                    </div>
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
