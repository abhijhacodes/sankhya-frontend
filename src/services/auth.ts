import DefaultAxiosInstance from "./clients/axios";

const LoginUserToSankhya = async (email: string) => {
    try {
        await DefaultAxiosInstance.post("/auth/login", {
            email,
        });
        return true;
    } catch (error) {
        return false;
    }
};

export const authServices = { LoginUserToSankhya };
