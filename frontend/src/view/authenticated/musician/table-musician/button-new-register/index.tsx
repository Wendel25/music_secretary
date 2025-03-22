import { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FormNewMusician } from "./form-musician";
import { useHasPermission } from "@/hook/use-has-permission";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,  
  DialogTrigger,
} from "@/components/ui/dialog";
import { UseDataForTableMusician } from "@/view/authenticated/musician/table-musician/use-data-for-table";

export function NewRegisterMusician() {
  const [open, setOpen] = useState(false);
  const isAdmin = useHasPermission();
  const { mutate } = UseDataForTableMusician();

  useEffect(() => {
    if (!open) {
      mutate();
    }
  }, [open, mutate]);

  return (
    <>
      {isAdmin && (
        <div className="flex w-full md:w-auto">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild onClick={() => setOpen(true)}>
              <Button className="w-full bg-emerald-500 hover:bg-emerald-600">
                <Plus /> Incluir Músico
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="text-color_logo">Cadastrar um Novo Músico</DialogTitle>
                <DialogDescription />
              </DialogHeader>

              <FormNewMusician closed={() => setOpen(false)} />
            </DialogContent>
          </Dialog>
        </div>
      )}
    </>
  );
}
