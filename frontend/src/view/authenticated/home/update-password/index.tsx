import { useEffect, useState } from "react";
import { useDataUser } from "@/hook/use-data-user";
import { FormUpdatePassword } from "@/view/authenticated/home/update-password/form-update";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function UpdatePassword() {
  const { data } = useDataUser();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (data?.password_changed_at) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [data]);

  const handleDialogClose = (openStatus: boolean) => {
    if (data?.password_changed_at) {
      setOpen(openStatus);
    } else {
      setOpen(true);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleDialogClose}>
      <DialogTrigger />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Bem Vindo!</DialogTitle>
          <DialogDescription>
            Para garantir a sua segurança, precisamos que você crie uma nova senha <b>antes</b> de acessar sua conta.
          </DialogDescription>
        </DialogHeader>

        <FormUpdatePassword />
      </DialogContent>
    </Dialog>
  );
}
