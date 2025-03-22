import { apiDelete } from "@/services/api";

export async function deleteItem<T>(url: string): Promise<T | undefined> {
    try {
        return await apiDelete(url);
    } catch (error) {
        throw new Error;
    }
}