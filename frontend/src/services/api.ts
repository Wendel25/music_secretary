import axiosInstance from "@/services/axios-instance";

export const apiPost = async <T>(url: string, data: object): Promise<T> => {
    const response = await axiosInstance.post(url, data);
    return response.data;
};

export const apiGet = async <T>(url: string, config?: Record<string, string>): Promise<T> => {
    const response = await axiosInstance.get(url, config);
    return response.data;
};

export const apiPatch = async <T>(url: string, data?: object): Promise<T> => {
    const response = await axiosInstance.patch(url, data);
    return response.data;
};

export const apiDelete = async <T>(id: string): Promise<T> => {
    const response = await axiosInstance.delete(id);
    return response.data;
};