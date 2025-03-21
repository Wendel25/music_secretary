import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FormRegisterUser } from "./form-register";
import { useHasPermission } from "@/hook/use-has-permission";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function NewRegisterTableUser() {
  const isAdmin = useHasPermission();

  return (
    <>
      {isAdmin && (
        <div className="flex w-full">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full bg-emerald-500 hover:bg-emerald-600">
                <Plus /> Novo Usuário
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="text-color_logo">Cadastrar um novo usuário</DialogTitle>
                <DialogDescription>
                  Após a conclusão do cadastro, a senha inicial de acesso do usuário será <b>Mudar123@</b>, sendo
                  recomendada sua alteração no primeiro login.
                </DialogDescription>
              </DialogHeader>

              <FormRegisterUser />
            </DialogContent>
          </Dialog>
        </div>
      )}
    </>
  );
}
