"use client";

import ErrorUI from "@/components/ErrorUI";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
    return <ErrorUI message={error.message} retryCallback={reset} />;
}
