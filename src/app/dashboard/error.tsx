"use client";

import ErrorUI from "@/components/ErrorUI";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
    return (
        <ErrorUI
            message="An error occured while fetching your project details. Please try again later."
            retryCallback={reset}
        />
    );
}
