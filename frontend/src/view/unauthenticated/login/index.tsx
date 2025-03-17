import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FormLogin } from "./form-login";

export function ViewLogin() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="border-none shadow-xl animate-fadeIn">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Bem-vindo!</CardTitle>
            <CardDescription className="text-center">Insira suas credenciais que te foram fornecidas</CardDescription>
          </CardHeader>
          <CardContent>
            <FormLogin />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
