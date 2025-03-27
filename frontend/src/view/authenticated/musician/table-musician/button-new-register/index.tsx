import { useState, useEffect, useRef } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FormNewMusician } from "./form-musician";
import { useHasPermission } from "@/hook/use-has-permission";
import { getDataMusicianAPI } from "@/view/authenticated/musician/get-data-api-musician";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function NewRegisterMusician() {
  const [open, setOpen] = useState(false);
  const isAdmin = useHasPermission();
  const { mutate } = getDataMusicianAPI();
  const isInitialRender = useRef(true);

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }

    if (!open) {
      mutate("musician");
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
