import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Lexend_Mega } from "next/font/google";

const lexend = Lexend_Mega({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Sankhya Pro - Dashboard",
    description: "Analytics dashboard of Sankhya Pro, an open source zero config tool for user analytics on the web.",
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className={lexend.className}>
            <Navbar />
            {children}
        </div>
    );
}
