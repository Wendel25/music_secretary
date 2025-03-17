import { deleteCookies } from "@/utils/cookies";

export function LogoutUser() {
    deleteCookies('ITU');
    window.location.replace('/login');
}