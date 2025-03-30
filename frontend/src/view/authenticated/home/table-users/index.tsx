import { usePagination } from "@/hook/use-pagination";
import { useUserStore } from "@/store/search-user-table";
import { formatPhoneNumber } from "@/utils/formatting/phone";
import { TableFooterComponent } from "@/components/layout/table-footer";
import { ButtonDeleteWithModal } from "@/components/layout/modal-deleted";
import { useDataUsers } from "@/view/authenticated/home/table-users/use-data-table";
import { HeaderTableUsers } from "@/view/authenticated/home/table-users/header-table";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { NewRegisterTableUser } from "@/view/authenticated/home/table-users/header-table/new-register";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect } from "react";

export function TableMusicianAndOrganist() {
  const { searchQuery } = useUserStore();
  const { data, refresh } = useDataUsers();

  const filteredData =
    data
      ?.filter(
        (user) =>
          user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.email.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .sort((a, b) => a.name.localeCompare(b.name)) || [];

  const { currentPage, totalPages, paginatedData, nextPage, prevPage, goToPage, itemsPerPage } = usePagination({
    data: filteredData,
  });

  useEffect(() => {
    refresh();
  }, []);

  return (
    <Card className="mt-8">
      <CardHeader className="flex flex-col md:flex-row gap-4 w-full justify-between items-center">
        <div className="w-full">
          <CardTitle>Usuários</CardTitle>
        </div>

        <div className="w-full md:w-[15%] flex justify-end">
          <NewRegisterTableUser />
        </div>
        <CardDescription />
      </CardHeader>
      <CardContent>
        <HeaderTableUsers />

        <div className="grid">
          <Table className="border rounded-md">
            <TableHeader className="bg-gray-200 rounded-md">
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Telefone</TableHead>
                <TableHead>Igreja</TableHead>
                <TableHead>Cidade</TableHead>
                <TableHead>Nível</TableHead>
                <TableHead>Ação</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedData?.map((item, index) => {
                const ministry = item.id_ministry.value === "ADM" ? "Secretário da Música" : item.id_ministry.value;

                return (
                  <TableRow key={index}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.email}</TableCell>
                    <TableCell>{formatPhoneNumber(item.phone)}</TableCell>
                    <TableCell>{item.id_church.name}</TableCell>
                    <TableCell>{item.id_church.id_city.value}</TableCell>
                    <TableCell>{ministry}</TableCell>
                    <TableCell>
                      <ButtonDeleteWithModal url={`user/${item.id}`} closed={() => refresh()} />
                    </TableCell>
                  </TableRow>
                );
              })}

              {paginatedData.length === 0 && (
                <TableRow>
                  <TableCell colSpan={10} className="h-24 text-center text-gray-600">
                    Nenhum resultado encontrado...
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
      <CardFooter>
        <TableFooterComponent
          currentPage={currentPage}
          totalPages={totalPages}
          itemsPerPage={itemsPerPage}
          sortedData={filteredData}
          setCurrentPage={goToPage}
          nextPage={nextPage}
          prevPage={prevPage}
        />
      </CardFooter>
    </Card>
  );
}
