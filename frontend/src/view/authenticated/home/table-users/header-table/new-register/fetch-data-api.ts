import { apiPost } from "@/services/api";
import { RegisterUsersSchemaType } from "@/schema/users";
import { DataUserInterface } from "@/interfaces/data-user";

export async function fetchDataRegisterUser(data: RegisterUsersSchemaType): Promise<DataUserInterface | undefined> {
    try {
        return await apiPost('user', data);
    } catch (error) {
        throw new Error;
    }
}