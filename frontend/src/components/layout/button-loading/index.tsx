import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-label";
import { LoaderCircle, Send } from "lucide-react";

interface ButtonComponent extends React.InputHTMLAttributes<HTMLButtonElement> {
  loading: boolean;
  nameButton?: string;
}

export function ButtonLoadingComponent({ loading, nameButton = "Entrar" }: ButtonComponent) {
  return (
    <Button type="submit" disabled={loading} className="w-full bg-color_logo hover:bg-[#007a8f] text-white px-4 py-2">
      {loading ? (
        <div className="flex items-center gap-2">
          Carregando...
          <LoaderCircle size={17} className="animate-spin" />
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <Label>{nameButton}</Label>
          <Send />
        </div>
      )}
    </Button>
  );
}