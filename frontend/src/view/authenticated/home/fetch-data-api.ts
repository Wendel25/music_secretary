import { apiGet } from "@/services/api";
import { validationUser } from "@/utils/validation-user";
import { DataDashboardReceived } from "@/interfaces/api/dashboard";

export async function fetchDataDashboard(): Promise<DataDashboardReceived | undefined> {
    const route = validationUser('dashboard', 'city'); 

    try {
        return await apiGet(route);
    } catch (error) {
        throw new Error;
    }
}