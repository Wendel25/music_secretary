import { jwtDecode } from "jwt-decode";
import { LogoutUser } from "@/utils/logout";

export function validationToken(token: string): boolean {
    const decoded = jwtDecode<{ exp: number }>(token);
    const currentTimestamp = Math.floor(Date.now() / 1000);
    const isValidToken = decoded.exp > currentTimestamp;

    if (!isValidToken) {
        LogoutUser();
        return false;
    }

    return true;
}