"use client";

import { Flex, Skeleton, Typography } from "antd";
const { Title } = Typography;
import styles from "./loading.module.css";

export default function Loading() {
    return (
        <Flex className={styles.container} justify="center" vertical gap="16px">
            <Title level={1} className={styles.heading}>
                Loading...
            </Title>
            <Title level={4} className={styles.subheading}>
                Please wait a moment, while we prepare your dashboard!
            </Title>
            <Skeleton active />
        </Flex>
    );
}
