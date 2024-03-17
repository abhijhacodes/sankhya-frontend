import { cookies } from "next/headers";
import DefaultAxiosInstance from "@/services/clients/axios";

export async function POST(req: Request) {
    if (req.method === "POST") {
        try {
            const { email } = await req.json();
            const loginResponse = await DefaultAxiosInstance.post("/auth/login", {
                email,
            });
            const token = loginResponse.headers["set-cookie"]?.[0]?.slice(6) as string | undefined;
            cookies().set("token", token!);
            return Response.json({ message: "Login successful" }, { status: 200 });
        } catch (error: any) {
            return Response.json({ message: "Internal server error" }, { status: 500 });
        }
    }
}
