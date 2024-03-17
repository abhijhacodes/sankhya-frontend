import { cookies } from "next/headers";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

const handler = NextAuth({
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
        }),
    ],
    callbacks: {
        async redirect({ url, baseUrl }) {
            return url === "/" ? baseUrl : "/getting-ready";
        },
    },
    events: {
        signOut() {
            cookies().delete("token");
        },
    },
});

export { handler as GET, handler as POST };
