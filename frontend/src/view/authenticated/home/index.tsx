import SidebarMenu from "@/components/layout/menu";
import { SidebarProvider } from "@/components/ui/sidebar";
import { LoadingComponent } from "@/components/layout/loading";
import { GraphicsHomeComponent } from "@/view/authenticated/home/graphics";
import { UpdatePassword } from "@/view/authenticated/home/update-password";
import { TableMusicianAndOrganist } from "@/view/authenticated/home/table-musician";
import { useDataFromApiDashboard } from "@/view/authenticated/home/use-data-from-api";

export function HomeView() {
  const { isPending } = useDataFromApiDashboard();

  return (
    <SidebarProvider>
      <SidebarMenu titlePage="Dashboard">
        {isPending ? (
          <LoadingComponent />
        ) : (
          <>
            <UpdatePassword />
            <GraphicsHomeComponent />
            <TableMusicianAndOrganist />
          </>
        )}
      </SidebarMenu>
    </SidebarProvider>
  );
}
