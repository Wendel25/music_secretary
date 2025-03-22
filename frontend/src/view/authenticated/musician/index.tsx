import SidebarMenu from "@/components/layout/menu";
import { SidebarProvider } from "@/components/ui/sidebar";
import { LoadingComponent } from "@/components/layout/loading";
import { TableMusician } from "@/view/authenticated/musician/table-musician";
import { SearchUserTable } from "@/view/authenticated/musician/table-musician/input-search";
import { NewRegisterMusician } from "@/view/authenticated/musician/table-musician/button-new-register";
import { UseDataForTableMusician } from "@/view/authenticated/musician/table-musician/use-data-for-table";

export function MusicianView() {
  const { isPending } = UseDataForTableMusician();

  return (
    <SidebarProvider>
      <SidebarMenu titlePage="Músicos" componentButton={<NewRegisterMusician />}>
        {isPending ? (
          <LoadingComponent />
        ) : (
          <div className="flex flex-col mt-8">
            <SearchUserTable />
            <TableMusician />
          </div>
        )}
      </SidebarMenu>
    </SidebarProvider>
  );
}
