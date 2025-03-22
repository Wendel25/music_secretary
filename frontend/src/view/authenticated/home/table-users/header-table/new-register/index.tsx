import { useEffect, useState } from "react";
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
import { useDataUsersForTable } from "@/view/authenticated/home/table-users/use-data-table";

export function NewRegisterTableUser() {
  const { refresh } = useDataUsersForTable();
  const [open, setOpen] = useState(false);
  const isAdmin = useHasPermission();

  useEffect(() => {
    if (!open) {
      refresh();
    }
  }, [open, refresh]);

  return (
    <>
      {isAdmin && (
        <div className="flex w-full">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild onClick={() => setOpen(true)}>
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

              <FormRegisterUser closed={() => setOpen(false)} />
            </DialogContent>
          </Dialog>
        </div>
      )}
    </>
  );
}
