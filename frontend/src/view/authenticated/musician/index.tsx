import SidebarMenu from "@/components/layout/menu";
import { SidebarProvider } from "@/components/ui/sidebar";
import { TableMusician } from "./table-musician";

export function MusicianView() {
  return (
    <SidebarProvider>
      <SidebarMenu titlePage="Músicos">
        <TableMusician />
      </SidebarMenu>
    </SidebarProvider>
  );
}
