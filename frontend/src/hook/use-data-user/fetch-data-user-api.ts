import { apiGet } from '@/services/api';
import { DataUserInterface } from '@/interfaces/data-user';

export async function updatePassword(email: string): Promise<DataUserInterface | undefined> {
    const router = `user/find-unique?email=${email}`;

    try {
        return await apiGet(router);
    } catch (error) {
       throw new Error;
    }
}
