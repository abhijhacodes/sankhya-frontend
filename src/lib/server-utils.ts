import { cookies } from "next/headers";

export const getCookies = () => {
    return `token=${cookies().get("token")?.value}`;
};
