import { create } from "zustand";
import { RegistersInterface } from "@/interfaces/registers";

interface RegistersStore {
    data: RegistersInterface[] | undefined;
    setData: (data: RegistersInterface[] | undefined) => void;
}

export const useRegistersStore = create<RegistersStore>((set) => ({
    data: undefined,
    setData: (data) => set({ data }),
}));