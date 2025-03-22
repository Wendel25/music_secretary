import { apiGet } from "@/services/api";

export async function fetchDataApiForSelect<T>(route: string): Promise<T[]> {
    try {
        const data = await apiGet(route);
        return (data as T[]) ?? [];
    } catch (error) {
        throw new Error;
    }
}