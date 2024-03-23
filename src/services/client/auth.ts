import axios from "axios";
import { getClientSideHeaders } from "@/lib/client-utils";

const LoginUserToSankhya = async (email: string) => {
    try {
        await axios.post(
            "/api/login",
            {
                email,
            },
            {
                withCredentials: true,
                headers: getClientSideHeaders(),
            }
        );
        return true;
    } catch (error) {
        return false;
    }
};

export const clientAuthServices = { LoginUserToSankhya };
