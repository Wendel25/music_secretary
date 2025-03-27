import SidebarMenu from "@/components/layout/menu";
import { SidebarProvider } from "@/components/ui/sidebar";
import { LoadingComponent } from "@/components/layout/loading";
import { SearchUserTable } from "@/utils/input-search-for-table";
import { TableMusician } from "@/view/authenticated/musician/table-musician";
import { getDataMusicianAPI } from "@/view/authenticated/musician/get-data-api-musician";
import { NewRegisterMusician } from "@/view/authenticated/musician/table-musician/button-new-register";

export function MusicianView() {
  const { isPending } = getDataMusicianAPI();

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
