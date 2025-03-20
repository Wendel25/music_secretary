import { create } from "zustand";

interface UserStore {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

export const useUserStore = create<UserStore>((set) => ({
    searchQuery: "",
    setSearchQuery: (query) => set({ searchQuery: query }),
}));
