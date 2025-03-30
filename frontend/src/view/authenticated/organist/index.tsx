import SidebarMenu from "@/components/layout/menu";
import { UseForType } from "@/interfaces/data-user";
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
            textButton="Adicionar Organista"
            textDialogTitle="Nova organista"
            Forms={(props) => (
              <FormNewMusician {...props} ministry="all-organists" useFor={"organists" as UseForType} />
            )}
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
