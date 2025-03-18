import { create } from "zustand";
import { DataDashboardReceived } from "@/interfaces/api/dashboard";

interface DashboardStore {
    data: DataDashboardReceived | undefined;
    setData: (data: DataDashboardReceived | undefined) => void;
}

export const useDashboardStore = create<DashboardStore>((set) => ({
    data: undefined,
    setData: (data) => set({ data }),
}));