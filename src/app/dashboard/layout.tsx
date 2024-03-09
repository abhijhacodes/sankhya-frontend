import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Lexend_Mega } from "next/font/google";

const lexend = Lexend_Mega({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Sankhya Pro - Dashboard",
    description: "Analytics dashboard of Sankhya Pro, an open source zero config tool for user analytics on the web.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={lexend.className}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
