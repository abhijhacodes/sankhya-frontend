"use client";

import { signOut } from "next-auth/react";

import Button from "@/components/Button";

export default function Project() {
    return (
        <main>
            <h1>Project page</h1>
            <Button text={"Signout"} onClick={signOut} />
        </main>
    );
}
