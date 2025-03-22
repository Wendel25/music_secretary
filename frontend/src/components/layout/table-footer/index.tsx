import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TableFooterProps<T> {
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  sortedData: T[];
  setCurrentPage: (page: number) => void;
  nextPage: () => void;
  prevPage: () => void;
}

export function TableFooterComponent<T>({
  currentPage,
  totalPages,
  itemsPerPage,
  sortedData,
  nextPage,
  prevPage,
}: TableFooterProps<T>) {
  return (
    <div className="flex flex-col md:flex-row gap-3 items-center justify-between w-full mt-5">
      <div className="text-sm text-muted-foreground">
        Mostrando {(currentPage - 1) * itemsPerPage + 1}-{Math.min(currentPage * itemsPerPage, sortedData.length)} de{" "}
        {sortedData.length} resultados
      </div>

      <div className="flex items-center space-x-2">
        <Button variant="outline" size="icon" onClick={prevPage} disabled={currentPage === 1}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <span className="text-sm font-medium">
          Página {currentPage} de {totalPages}
        </span>
        <Button variant="outline" size="icon" onClick={nextPage} disabled={currentPage === totalPages}>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
