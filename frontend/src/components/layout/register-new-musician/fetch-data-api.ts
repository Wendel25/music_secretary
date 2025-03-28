import { apiPost } from "@/services/api";
import { RegisterSchemaType } from "@/schema/registers";

interface DataReturnProps {
    id: string;
    name: string;
    phone: string;
    id_church: {
        id: string;
    },
    id_ministry: {
        id: string;
    },
    id_instrument: {
        id: string;
    },
    id_status: {
        id: string;
    },
    created_at: string;
}

export async function fetchDataRegister(data: RegisterSchemaType): Promise<DataReturnProps | undefined> {
    try {
        return await apiPost('musician-and-organists', data);
    } catch (error) {
        throw new Error;
    }
}