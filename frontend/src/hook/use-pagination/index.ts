import { useState } from "react";

interface UsePaginationProps<T> {
    data: T[];
}

export function usePagination<T>({ data }: UsePaginationProps<T>) {
    const itemsPerPage = 20;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const paginatedData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prev) => prev + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
        }
    };

    const goToPage = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return {
        itemsPerPage,
        currentPage,
        totalPages,
        paginatedData,
        nextPage,
        prevPage,
        goToPage,
    };
}
