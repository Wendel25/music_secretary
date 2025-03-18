import { Loader2 } from "lucide-react";

export function LoadingComponent() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/25">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="h-12 w-12 animate-spin text-color_logo" />
        <p className="text-lg font-medium text-white">Carregando...</p>
      </div>
    </div>
  );
}
