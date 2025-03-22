import { apiGet } from "@/services/api";
import { validationUser } from "@/utils/validation-user-for-api";
import { DataDashboardReceived } from "@/interfaces/dashboard";

export async function fetchDataDashboard(): Promise<DataDashboardReceived | undefined> {
    const route = validationUser('dashboard'); 

    try {
        return await apiGet(route);
    } catch (error) {
        throw new Error;
    }
}