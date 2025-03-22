import { Button } from "@/components/ui/button";
import { Edit, RefreshCw } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface EditDataProps {
  id: string;
  children?: React.ReactNode;
  updateRegister: () => void;
}

export function ModalEdit({ id, children, updateRegister }: EditDataProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="icon"
          variant="outline"
          disabled={false}
          aria-label="Deletar registro"
          className="text-amber-600 hover:bg-amber-600 hover:text-white shadow"
        >
          {false ? <RefreshCw className="h-4 w-4 animate-spin" /> : <Edit className="h-4 w-4" />}
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-color_logo">Atualizar registro</DialogTitle>
          <DialogDescription />
        </DialogHeader>

        {children}
      </DialogContent>
    </Dialog>
  );
}
