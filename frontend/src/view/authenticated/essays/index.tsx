import SidebarMenu from "@/components/layout/menu";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function EssaysPreviw() {
  return (
    <SidebarProvider>
      <SidebarMenu titlePage="Presença de Ensaios">
        <p>Dados aqui</p>
      </SidebarMenu>
    </SidebarProvider>
  );
}
