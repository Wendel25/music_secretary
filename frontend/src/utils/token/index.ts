import { jwtDecode } from "jwt-decode";
import { LogoutUser } from "@/utils/logout";
import { getCookies } from "@/utils/cookies";
import { decrypt } from "@/utils/crypto-value";
import { TokenResponse } from "@/interfaces/token-response";

export function TokenDecode(): TokenResponse | undefined {
    const token = getCookies('ITU');
    const decryptedToken = decrypt(token);

    try {
        return jwtDecode(decryptedToken);
    } catch (error) {
        LogoutUser();
    }
}