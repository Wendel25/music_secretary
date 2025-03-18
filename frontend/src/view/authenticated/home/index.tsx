import SidebarMenu from "@/components/layout/menu";
import { SidebarProvider } from "@/components/ui/sidebar";
import { LoadingComponent } from "@/components/layout/loading";
import { useDataFromApiDashboard } from "@/view/authenticated/home/use-data-from-api";
import { HeaderHomeComponent } from "./header";

export function HomeView() {
  const { isPending } = useDataFromApiDashboard();

  return (
    <>
      {isPending ? (
        <LoadingComponent />
      ) : (
        <SidebarProvider>
          <SidebarMenu titlePage="Dashboard">
            <HeaderHomeComponent />
          </SidebarMenu>
        </SidebarProvider>
      )}
    </>
  );
}
