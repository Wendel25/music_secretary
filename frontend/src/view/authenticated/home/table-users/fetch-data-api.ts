import { apiGet } from "@/services/api";
import { validationUser } from "@/utils/validation-user-for-api";
import { DataUserInterface } from "@/interfaces/data-user";

export async function fetchDataTable(): Promise<DataUserInterface[] | undefined> {
    const route = validationUser('user'); 

    try {
        return await apiGet(route);
    } catch (error) {
        throw new Error;
    }
}