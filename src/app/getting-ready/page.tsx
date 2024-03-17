"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Flex, Typography } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
const { Title } = Typography;

import styles from "./gettingready.module.css";
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
                router.push("/error");
            }
        })();
    }, [sessionDetails]);

    return (
        <Flex vertical justify="center" align="center" className={styles.container}>
            <Flex gap="16px">
                <Title level={1} className={styles.heading}>
                    Getting ready
                </Title>
                <LoadingOutlined style={{ fontSize: "32px" }} />
            </Flex>
            <Title level={3} className={styles.subheading}>
                Tighten your seatbelt, we are getting ready to take off 🚀
            </Title>
            <Image src="/assets/RocketLaunch.svg" alt="getting ready" width={260} height={260} />
        </Flex>
    );
}
