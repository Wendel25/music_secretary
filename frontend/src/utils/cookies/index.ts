import Cookie from "js-cookie";
import { encrypt, decrypt } from "@/utils/crypto-value";

export const setCookies = (nameCookie: string, valueCookie: Object) => {
    const valueString = JSON.stringify(valueCookie);
    const valueCript = encrypt(valueString);

    const expiresDate = new Date();
    expiresDate.setTime(expiresDate.getTime() + 8 * 60 * 60 * 1000);

    Cookie.set(nameCookie, valueCript, {
        expires: expiresDate,
        secure: true,
        sameSite: "Strict",
        path: "/",
    });
};

export const getCookies = (nameCookie: string) => {
    const cookie = Cookie.get(nameCookie);

    if (!cookie) return null;

    try {
        const dataDecrypt = decrypt(cookie || '');
        const parsedData = JSON.parse(dataDecrypt);
        return parsedData;
    } catch (error) {
        console.error(`Error decrypting or parsing cookie "${nameCookie}": ${error}`);
    }
};

export const deleteCookies = (nameCookie: string) => {
    Cookie.remove(nameCookie, {
        path: "/",
    });
};

export const updateCookie = (nameCookie: string, newValueCookie: Object) => {
    deleteCookies(nameCookie);
    setCookies(nameCookie, newValueCookie);
};
