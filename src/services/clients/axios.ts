import axios from "axios";

const DefaultAxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SANKHYA_BACKEND_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
    },
});

export default DefaultAxiosInstance;
