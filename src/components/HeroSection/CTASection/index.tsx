"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
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

    return (
        <div className={styles.cta__section}>
            <Button text="Get Started" onClick={signIn} bgColor="#ff7a5c" textColor="#fff" size="lg" />
            <Button text="See how it works" onClick={() => {}} bgColor="#ff7a5c" textColor="#fff" size="lg" />
        </div>
    );
}
