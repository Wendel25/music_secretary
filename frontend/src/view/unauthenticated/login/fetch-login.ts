import { apiPost } from '@/services/api';
import { TokenLogin } from '@/interfaces/login';
import { LoginSchemaType } from "@/schema/login";
import { AxiosError } from "axios";

const ERROR_MESSAGES: Record<string, string> = {
    "Invalid credentials": "Credenciais inválidas. Verifique seus dados e tente novamente.",
    "Access blocked Contact support for more details!": "Seu acesso foi bloqueado. Entre em contato com o suporte.",
    "default": "Ocorreu um erro inesperado ao tentar realizar o login. Por favor, tente novamente mais tarde."
};

export async function fetchLogin(data: LoginSchemaType): Promise<TokenLogin | undefined> {
    try {
        return await apiPost('/login', data);
    } catch (error) {
        if (error instanceof AxiosError && error.response) {
            const errorMessage = error.response.data?.message || "default";
            throw new Error(ERROR_MESSAGES[errorMessage] || ERROR_MESSAGES["default"]);
        }
    }
}
