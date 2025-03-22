import { RegisterDataInterface as InstrumentInterface } from "@/interfaces/registers";

export const instrumentFilters = {
    musician: (items: InstrumentInterface[]) =>
        items.filter((item) => item.value !== "Órgão"),
    organist: (items: InstrumentInterface[]) =>
        items.filter((item) => item.value === "Órgão"),
};