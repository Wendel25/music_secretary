import { apiGet } from "@/services/api";
import { RegistersInterface } from "@/interfaces/registers";
import { validationUser } from "@/utils/validation-user-for-api";

export async function fetchDataTable(route: string): Promise<RegistersInterface[] | undefined> {
    const initialParamsRoute = 'musician-and-organists/';
    const validationRoute = validationUser(`${initialParamsRoute}${route}`); 

    try {
        return await apiGet(validationRoute);
    } catch (error) {
        throw new Error;
    }
}