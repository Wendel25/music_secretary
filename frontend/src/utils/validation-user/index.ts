import { TokenDecode } from "@/utils/token";

export function validationUser(nameRoute: string, parameter: string) {
    const dataToken = TokenDecode();

    const city = dataToken?.city;
    const ministry = dataToken?.ministry;

    let route = '';

    if (ministry === 'adm' || ministry === 'Encarregado - Regional' || ministry === 'Ancião') {
        route = nameRoute;
    } else {
        route = `${nameRoute}?${parameter}=${city}`;
    }

    return route;
}