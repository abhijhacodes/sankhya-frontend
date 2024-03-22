import { cookies } from "next/headers";

export const getServerSideHeaders = () => {
    return {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookies().get("token")?.value}`,
    };
};
