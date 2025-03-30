import { ReactNode, useState } from "react";
import { useToast } from "@/hook/use-toast";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { Trash2, RefreshCw, AlertCircle } from "lucide-react";
import { deleteItem } from "@/components/layout/modal-deleted/delete-item";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ModalButtonProps {
  url: string;
  children?: ReactNode;
  closed: () => void;
}

export function ButtonDeleteWithModal<T>({ url, children, closed }: ModalButtonProps) {
  const { showSuccess, showError } = useToast();
  const [open, setOpen] = useState(false);

  const { mutate, isPending } = useMutation({
    mutationFn: () => deleteItem<T>(url),
    onSuccess: () => {
      closed();
      setOpen(false);
      showSuccess("Exclusão realizada com sucesso.");
    },
    onError: () => showError("Não foi possivel deletar este registro."),
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div>
          {children || (
            <Button
              size="icon"
              variant="outline"
              disabled={isPending}
              aria-label="Deletar registro"
              className="text-red-600 hover:bg-red-600 hover:text-white shadow"
            >
              {isPending ? <RefreshCw className="h-4 w-4 animate-spin" /> : <Trash2 className="h-4 w-4" />}
            </Button>
          )}
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-destructive" />
            Confirmar exclusão
          </DialogTitle>
          <DialogDescription>Você tem certeza que continuar com a exclusão?</DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-end gap-2 mt-2">
          <Button type="button" variant="outline" onClick={() => setOpen(false)} disabled={isPending}>
            Cancelar
          </Button>
          <Button type="button" variant="destructive" onClick={() => mutate()} disabled={isPending}>
            {isPending ? (
              <>
                <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent"></span>
                Excluindo...
              </>
            ) : (
              "Excluir"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
