import { apiGet } from '@/services/api';

export async function fetchDataApiGet<T>(route: string): Promise<T | undefined> {
    try {
        return await apiGet(route);
    } catch (error) {
       throw new Error;
    }
}
