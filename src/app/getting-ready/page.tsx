"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

import { authServices } from "@/services/auth";

export default function GettingReady() {
    const { data: sessionDetails } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (!sessionDetails?.user?.email) return;
        (async () => {
            const isLoginSuccessFul = await authServices.LoginUserToSankhya(sessionDetails?.user?.email!);
            if (isLoginSuccessFul) {
                router.push("/dashboard/project");
            } else {
                console.log("error");
            }
        })();
    }, [sessionDetails]);

    return (
        <main>
            <h1>Getting ready</h1>
        </main>
    );
}
