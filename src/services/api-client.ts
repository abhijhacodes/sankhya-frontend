import axios from "axios";

const DefaultAxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SANKHYA_BACKEND_URL,
    withCredentials: true,
});

export default DefaultAxiosInstance;
