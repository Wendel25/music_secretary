import { apiPatch } from '@/services/api';
import { TokenDecode } from '@/utils/token';
import { UpdatePasswordSchemaType } from '@/schema/update-password';

interface UpdatePasswordInterface {
    message: string;
}

export async function updatePassword(data: UpdatePasswordSchemaType): Promise<UpdatePasswordInterface | undefined> {
    const { confirmPassword, ...newPassword } = data;
    const dataToken = TokenDecode();
    const router = `update-password?email=${dataToken?.email}`;

    try {
        return await apiPatch(router, newPassword);
    } catch (error) {
       throw new Error;
    }
}
