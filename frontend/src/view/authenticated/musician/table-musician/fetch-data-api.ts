import { apiGet } from "@/services/api";
import { RegistersInterface } from "@/interfaces/registers";
import { validationUser } from "@/utils/validation-user-for-api";

export async function fetchDataTableMusician(): Promise<RegistersInterface[] | undefined> {
    const route = validationUser('musician-and-organists/musician'); 

    try {
        return await apiGet(route);
    } catch (error) {
        throw new Error;
    }
}