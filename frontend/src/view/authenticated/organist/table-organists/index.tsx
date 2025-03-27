import { Award } from "lucide-react";
import { usePagination } from "@/hook/use-pagination";
import { useRegistersStore } from "@/store/registers";
import { useUserStore } from "@/store/search-user-table";
import { formatPhoneNumber } from "@/utils/formatting/phone";
import { useHasPermission } from "@/hook/use-has-permission";
import { TableFooterComponent } from "@/components/layout/table-footer";
import { ButtonsForActionTable } from "@/components/layout/buttons-for-action-table";
import { getDataOrganistAPI } from "@/view/authenticated/organist/get-data-api-organist";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function TableOrganist() {
  const isAdmin = useHasPermission();
  const { data } = useRegistersStore();
  const { mutate } = getDataOrganistAPI();

  const { searchQuery } = useUserStore();
  const filteredData =
    data
      ?.filter((user) => user.name.toLowerCase().includes(searchQuery.toLowerCase()))
      .sort((a, b) => a.name.localeCompare(b.name)) || [];

  const { currentPage, totalPages, paginatedData, nextPage, prevPage, goToPage, itemsPerPage } = usePagination({
    data: filteredData,
  });
    
      return (
        <div className="grid mt-5">
          <Table className="border rounded-md">
            <TableHeader className="bg-gray-200 rounded-md">
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Telefone</TableHead>
                <TableHead>Igreja</TableHead>
                <TableHead>Cidade</TableHead>
                <TableHead>Instrumento</TableHead>
                <TableHead>Nível</TableHead>
                {isAdmin && <TableHead>Ação</TableHead>}
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedData?.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{formatPhoneNumber(item.phone)}</TableCell>
                  <TableCell>{item.id_church.name}</TableCell>
                  <TableCell>{item.id_church.id_city.value}</TableCell>
                  <TableCell>{item.id_instrument.value}</TableCell>
                  <TableCell className="flex justify-center">
                    <div className="flex items-center gap-1">
                      {item.id_ministry.value !== "Organista" && <Award className="h-3.5 w-3.5 text-amber-500" />}
                      <span> {item.id_ministry.value}</span>
                    </div>
                  </TableCell>
                  {isAdmin && (
                    <TableCell>
                      <ButtonsForActionTable
                        id={item.id}
                        routerDeleted={`musician-and-organists/${item.id}`}
                        onUpdateDataTable={() => mutate("organists")}
                        children={<p>Aqui vai o componente de formulario para atualizar organistas</p>}
                      />
                    </TableCell>
                  )}
                </TableRow>
              ))}

              {paginatedData?.length === 0 && (
                <TableRow>
                  <TableCell colSpan={7} className="h-24 text-center text-gray-600">
                    Nenhum resultado encontrado...
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>

          <TableFooterComponent
            currentPage={currentPage}
            totalPages={totalPages}
            itemsPerPage={itemsPerPage}
            sortedData={filteredData}
            setCurrentPage={goToPage}
            nextPage={nextPage}
            prevPage={prevPage}
          />
        </div>
      );
}
