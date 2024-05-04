"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
import { signIn, useSession } from "next-auth/react";

import styles from "./cta.module.css";
import Button from "@/components/Button";

export default function CTASection() {
    const { status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "authenticated") {
            router.push("/getting-ready");
        }
    }, [status]);

    useEffect(() => {
        (async () => {
            try {
                if (typeof window !== "undefined") {
                    await (window as any).sankhyaSDKv1.captureUserEvent(process.env.NEXT_PUBLIC_SANKHYA_API_KEY);
                }
            } catch (error) {}
        })();
    }, []);

    return (
        <>
            <Script src={`${process.env.NEXT_PUBLIC_SANKHYA_SDK_URL}`} strategy="beforeInteractive" />
            <div className={styles.cta__section}>
                <Button text="Get Started" onClick={() => signIn()} bgColor="#ff7a5c" textColor="#fff" size="lg" />
                <Link href="/guide" target="__blank">
                    <Button text="See how it works" onClick={() => {}} bgColor="#ff7a5c" textColor="#fff" size="lg" />
                </Link>
            </div>
        </>
    );
}
