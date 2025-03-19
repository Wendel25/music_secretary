import { create } from "zustand";
import { DataUserInterface } from "@/interfaces/data-user";

interface DataUserStore {
    data: DataUserInterface | undefined;
    setData: (data: DataUserInterface | undefined) => void;
}

export const useDataUserStore = create<DataUserStore>((set) => ({
    data: undefined,
    setData: (data) => set({ data }),
}));