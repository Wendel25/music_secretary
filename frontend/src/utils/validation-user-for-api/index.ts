import { TokenDecode } from "@/utils/token";

export function validationUser(nameRoute: string, parameter: string) {
    const dataToken = TokenDecode();

    const city = dataToken?.church.city.value;
    const ministry = dataToken?.ministry;

    let route = '';

    if (ministry === 'ADM' || ministry === 'Encarregado - Regional' || ministry === 'Ancião') {
        route = nameRoute;
    } else {
        route = `${nameRoute}?${parameter}=${city}`;
    }

    return route;
}