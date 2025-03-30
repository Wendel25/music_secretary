// Parte 04 - Refatorando a store
import { create } from "zustand";
import { RegistersInterface } from "@/interfaces/registers";

interface RegistersStore {
    musicianData: RegistersInterface[] | undefined;
    organistData: RegistersInterface[] | undefined;
    setMusicianData: (data: RegistersInterface[] | undefined) => void;
    setOrganistData: (data: RegistersInterface[] | undefined) => void;
}

export const useRegistersStore = create<RegistersStore>((set) => ({
    musicianData: undefined,
    organistData: undefined,
    setMusicianData: (data) => set({ musicianData: data }),
    setOrganistData: (data) => set({ organistData: data }),
}));
