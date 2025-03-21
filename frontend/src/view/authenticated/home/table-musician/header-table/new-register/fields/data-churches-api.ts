import { apiGet } from "@/services/api";
import { TokenDecode } from "@/utils/token";
import { ChurchInterface } from "@/interfaces/churches";
import { useHasPermission } from "@/hook/use-has-permission";

export async function fetchDataChurches(): Promise<ChurchInterface[] | undefined> {
    const token = TokenDecode();
    const permission = useHasPermission();

    let route = '';

    if (permission) {
        route = 'church';
    } else {
        route = `church/id_city=${token?.church.city.id}`;
    }

    try {
        return await apiGet(route);
    } catch (error) {
        throw new Error;
    }
}