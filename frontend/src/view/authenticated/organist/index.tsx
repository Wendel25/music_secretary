import SidebarMenu from "@/components/layout/menu";
import { SidebarProvider } from "@/components/ui/sidebar";

export function OrganistView() {
  return (
    <SidebarProvider>
      <SidebarMenu titlePage="Organistas">aqui vai o conteudo da página</SidebarMenu>
    </SidebarProvider>
  );
}
