import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: ["400", "500", "700", "900"], subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Sankhya Pro - Guide",
    description:
        "Guide and integration documentation of Sankhya, an open source and free zero config tool for user analytics on the web.",
};

export default function GuideLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={roboto.className}>{children}</body>
        </html>
    );
}
