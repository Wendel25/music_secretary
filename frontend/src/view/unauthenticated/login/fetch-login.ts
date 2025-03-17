import { apiPost } from '@/services/api';
import { TokenLogin } from '@/interfaces/login';
import { LoginSchemaType } from "@/schema/login";

export async function fetchLogin(data: LoginSchemaType): Promise<TokenLogin | undefined> {
    try {
        return await apiPost('/login', data);
    } catch (error) {
        throw new Error('Email ou senha incorretos!');
    }
}