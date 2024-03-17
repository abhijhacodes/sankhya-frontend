import axios from "axios";

const LoginUserToSankhya = async (email: string) => {
    try {
        await axios.post(
            "/api/login",
            {
                email,
            },
            {
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        return true;
    } catch (error) {
        return false;
    }
};

export const authServices = { LoginUserToSankhya };
