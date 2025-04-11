import { apiGet } from "@/services/api";
import { RegistersInterface } from "@/interfaces/registers";

export async function fetchDataApiForSelect(): Promise<RegistersInterface[]> {
    try {
        return await apiGet('essays/responsives-essays');
    } catch (error) {
        throw new Error;
    }
}