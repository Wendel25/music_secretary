import { useCallback, useState } from "react";
import { useKeyPress } from "@/hook/use-shortcut";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CircleHelp, Keyboard, Settings } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function ShortcutMessages() {
  const [open, setOpen] = useState(true);

  const shortcutsData = [
    { action: "Abrir/Fechar Menu", shortcut: ["Ctrl", "B"] },
    { action: "Abrir Modal de Atalhos", shortcut: ["Ctrl", "K"] },
  ];

  const toggleSidebar = useCallback(() => {
    setOpen((prevState) => !prevState);
  }, []);

  useKeyPress("k", toggleSidebar, "ctrl");

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <CircleHelp size={26} />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex gap-2 items-center">
            <Keyboard />
            Sistema de Atalhos
          </DialogTitle>
          <DialogDescription>
            Atalhos de Teclado Lista de todos os atalhos de teclado disponíveis no sistema.
          </DialogDescription>
          <div className="mt-1">
            <ScrollArea className="max-h-[200px] mt-2">
              {shortcutsData.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm">{item.action}</span>
                    <div className="flex items-center gap-1">
                      {item.shortcut.map((key, keyIndex) => (
                        <span key={keyIndex}>
                          {keyIndex > 0 && <span className="mx-1">+</span>}
                          <kbd className="rounded border border-color_logo bg-color_logo text-white px-2 py-1 text-xs font-semibold">
                            {key}
                          </kbd>
                        </span>
                      ))}
                    </div>
                  </div>
                  <Separator />
                </div>
              ))}
            </ScrollArea>
          </div>
        </DialogHeader>

        <div className="flex justify-center text-center w-full -mb-3 mt-2">
          <a href="/support" target="_blank" className="flex gap-2 items-center">
            <Settings className="animate-spin text-color_logo" size={17} />
            <span className="text-color_logo text-sm"> Suporte </span>
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
