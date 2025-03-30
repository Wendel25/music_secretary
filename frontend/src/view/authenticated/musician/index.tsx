import SidebarMenu from "@/components/layout/menu";
import { UseForType } from "@/interfaces/data-user";
import { SidebarProvider } from "@/components/ui/sidebar";
import { LoadingComponent } from "@/components/layout/loading";
import { SearchUserTable } from "@/utils/input-search-for-table";
import { getDataFromAPI } from "@/utils/get-data-api/get-data-from-api";
import { TableMusician } from "@/view/authenticated/musician/table-musician";
import { ModalRegisterMusician } from "@/components/layout/register-new-musician";
import { FormNewMusician } from "@/components/layout/register-new-musician/forms-new-musician";

export function MusicianView() {
  const { isPending } = getDataFromAPI();

  return (
    <SidebarProvider>
      <SidebarMenu
        titlePage="Músicos"
        componentButton={
          <ModalRegisterMusician
            textButton="Adicionar Músico"
            textDialogTitle="Novo Músico"
            Forms={(props) => <FormNewMusician {...props} ministry="all-musicians" useFor={"musician" as UseForType} />}
          />
        }
      >
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
