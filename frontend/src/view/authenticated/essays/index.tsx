import SidebarMenu from "@/components/layout/menu";
import { SidebarProvider } from "@/components/ui/sidebar";
import { CreateEssays } from "./create";

export default function EssaysPreviw() {
  return (
    <SidebarProvider>
      <SidebarMenu titlePage="Presença de Ensaios" componentButton={<CreateEssays />}>
        <p>Dados aqui</p>
      </SidebarMenu>
    </SidebarProvider>
  );
}
