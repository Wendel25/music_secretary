import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FormCreateEssays } from "./forms";

export function CreateEssays() {
  const [open, setOpen] = useState(false);
    
  return (
    <div className="flex w-full md:w-auto">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild onClick={() => setOpen(true)}>
          <Button className="w-full bg-emerald-500 hover:bg-emerald-600">
            <Plus /> Novo Ensaios
          </Button>
        </DialogTrigger>
        <DialogContent className="min-w-[50%] max-h-[90vh] overflow-auto">
          <DialogHeader>
            <DialogTitle className="text-color_logo">Cadastrar novo Ensaio</DialogTitle>
            <DialogDescription />
          </DialogHeader>

          <FormCreateEssays closed={() => setOpen(false)} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
