import { TokenDecode } from "@/utils/token";

export function useHasPermission() {
    const token = TokenDecode();
    return token?.ministry === "ADM";
}
