import { create } from "zustand";
import { DataUserInterface } from "@/interfaces/data-user";

interface ListUsersStoreInterface {
    data: DataUserInterface[] | undefined;
    setData: (data: DataUserInterface[] | undefined) => void;
}

export const useListUsersStore = create<ListUsersStoreInterface>((set) => ({
    data: undefined,
    setData: (data) => set({ data }),
}));