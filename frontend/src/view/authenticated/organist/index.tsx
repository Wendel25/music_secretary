import SidebarMenu from "@/components/layout/menu";
import { SidebarProvider } from "@/components/ui/sidebar";
import { LoadingComponent } from "@/components/layout/loading";
import { SearchUserTable } from "@/utils/input-search-for-table";
import { getDataFromAPI } from "@/utils/get-data-api/get-data-from-api";
import { TableOrganist } from "@/view/authenticated/organist/table-organists";
import { ModalRegisterMusician } from "@/components/layout/register-new-musician";
import { FormNewMusician } from "@/components/layout/register-new-musician/forms-new-musician";

export function OrganistView() {
  const { isPending } = getDataFromAPI();

  return (
    <SidebarProvider>
      <SidebarMenu
        titlePage="Organistas"
        componentButton={
          <ModalRegisterMusician
            route="organists"
            textButton="Adicionar Organista"
            textDialogTitle="Nova organista"
            Forms={(props) => <FormNewMusician {...props} ministry="all-organists" instrument="organist" />}
          />
        }
      >
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
