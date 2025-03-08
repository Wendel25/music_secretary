import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ViewLogin() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl grid md:grid-cols-2 overflow-hidden mt-[40%] sm:mt-20">
        <div className="p-6 flex flex-col max-h-[60vh] sm:max-h-[70vh] overflow-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Entrar</CardTitle>
            <p className="text-muted-foreground">Entre com suas credenciais para acessar sua conta</p>
          </CardHeader>
          <CardContent className="flex flex-col flex-grow">
            <p>teste</p>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}
