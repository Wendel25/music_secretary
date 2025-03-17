import axios from 'axios';
import { getCookies } from "@/utils/cookies";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_PUBLIC_ROUTE_FETCH_API_LOCAL,
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = getCookies('ITU');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default axiosInstance;