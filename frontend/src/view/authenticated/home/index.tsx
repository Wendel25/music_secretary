import SidebarMenu from "@/components/layout/menu";
import { SidebarProvider } from "@/components/ui/sidebar"; // Importa o provider correto

export function HomeView() {
  return (
    <SidebarProvider>
      <SidebarMenu titlePage="Dashboard">
        <h1>Dashboard</h1>
      </SidebarMenu>
    </SidebarProvider>
  );
}
