import SidebarMenu from "@/components/layout/menu";
import { SidebarProvider } from "@/components/ui/sidebar";
import { LoadingComponent } from "@/components/layout/loading";
import { SearchUserTable } from "@/utils/input-search-for-table";
import { TableOrganist } from "@/view/authenticated/organist/table-organists";
import { getDataOrganistAPI } from "@/view/authenticated/organist/get-data-api-organist";

export function OrganistView() {
  const { isPending } = getDataOrganistAPI();

  return (
    <SidebarProvider>
      <SidebarMenu titlePage="Organistas">
        {isPending ? (
          <LoadingComponent />
        ) : (
          <div className="flex flex-col mt-8">
            <SearchUserTable />
            <TableOrganist />
          </div>
        )}
      </SidebarMenu>
    </SidebarProvider>
  );
}
