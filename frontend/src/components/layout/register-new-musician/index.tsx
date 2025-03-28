import { useState, useEffect, useRef } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getDataFromAPI } from "@/utils/get-data-api/get-data-from-api";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface FormNewMusicianProps {
  route: string;
  textButton: string;
  textDialogTitle: string;
  Forms: React.ComponentType<{ closed: () => void }>;
}

export function ModalRegisterMusician({ route, textButton, textDialogTitle, Forms }: FormNewMusicianProps) {
  const [open, setOpen] = useState(false);

  const { mutate } = getDataFromAPI();
  const isInitialRender = useRef(true);

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }

    if (!open && route === "musician") {
      mutate("musician");
    }

    if (!open && route === "organists") {
      mutate("organists");
    }
  }, [open, mutate]);

  return (
    <div className="flex w-full md:w-auto">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild onClick={() => setOpen(true)}>
          <Button className="w-full bg-emerald-500 hover:bg-emerald-600">
            <Plus /> {textButton}
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-color_logo">{textDialogTitle}</DialogTitle>
            <DialogDescription />
          </DialogHeader>

          <Forms closed={() => setOpen(false)} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
