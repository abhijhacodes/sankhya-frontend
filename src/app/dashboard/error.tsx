"use client";

import { Card, Typography } from "antd";
const { Title, Text } = Typography;

import styles from "./error.module.css";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
    return (
        <main className={styles.error__container}>
            <Card className={styles.error_card}>
                <Title type="danger">Something went wrong!</Title>
                <Text>{error.message}</Text>
            </Card>
        </main>
    );
}
