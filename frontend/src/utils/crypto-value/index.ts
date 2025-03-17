import CryptoJS from "crypto-js";

const key = import.meta.env.VITE_PUBLIC_AUTH_SECRET;

export const encrypt = (text: string): string => {
    const encrypted = CryptoJS.AES.encrypt(text, key).toString();
    return JSON.stringify({ ciphertext: encrypted });
};

export const decrypt = (encryptedText: string): string => {
    try {
        if (encryptedText.startsWith("eyJ")) {
            return encryptedText;
        }

        const parsed = JSON.parse(encryptedText);
        const bytes = CryptoJS.AES.decrypt(parsed.ciphertext, key);
        const decrypted = bytes.toString(CryptoJS.enc.Utf8);

        return decrypted;
    } catch (error) {
        console.error("Erro ao descriptografar:", error);
        return '';
    }
};