import { RegisterDataInterface as MinistryInterface } from "@/interfaces/registers";

export const ministryFilters = {
    "all-musicians": (items: MinistryInterface[]) =>
        items.filter(
            (item) =>
                item.value === "Músico" ||
                item.value === "Músico - Instrutor" ||
                item.value === "Encarregado - Local" ||
                item.value === "Encarregado - Regional"
        ),
    "all-organists": (items: MinistryInterface[]) =>
        items.filter(
            (item) => item.value === "Organista" || item.value === "Organista - Instrutora"
        ),
    "all-users": (items: MinistryInterface[]) =>
        items.filter(
            (item) =>
                item.value === "Ancião" ||
                item.value === "Encarregado - Local" ||
                item.value === "Encarregado - Regional"
        ),
};