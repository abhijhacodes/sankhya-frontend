import DefaultAxiosInstance from "@/services/api-client";

export async function POST(req: Request) {
    if (req.method === "POST") {
        try {
            const { email } = await req.json();
            const loginResponse = await DefaultAxiosInstance.post("/auth/login", {
                email,
            });
            const setCookieHeader = loginResponse.headers["set-cookie"]?.[0] as string | undefined;

            return Response.json(
                { message: "Login successful" },
                {
                    status: 200,
                    headers: {
                        "Set-Cookie": `${setCookieHeader}`,
                    },
                }
            );
        } catch (error: any) {
            return Response.json({ message: "Internal server error" }, { status: 500 });
        }
    }
}
