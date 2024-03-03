import type { Metadata } from "next";
import { Lexend_Mega } from "next/font/google";

import "./globals.css";
import AuthSessionWrapper from "@/components/Auth/AuthSessionWrapper";

const lexend = Lexend_Mega({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Sankhya Pro",
    description: "An open source zero config tool for user analytics on the web.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <AuthSessionWrapper>
            <html lang="en">
                <body className={lexend.className}>{children}</body>
            </html>
        </AuthSessionWrapper>
    );
}
