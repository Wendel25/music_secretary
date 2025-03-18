import { LoadingComponent } from "@/components/layout/loading";
import SidebarMenu from "@/components/layout/menu";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useDataFromApiDashboard } from "@/view/authenticated/home/use-data-from-api";

export function HomeView() {
  const { isPending } = useDataFromApiDashboard();

  return (
    <>
      {isPending ? (
        <LoadingComponent />
      ) : (
        <SidebarProvider>
          <SidebarMenu titlePage="Dashboard">
            <h1>Dashboard</h1>
          </SidebarMenu>
        </SidebarProvider>
      )}
    </>
  );
}
