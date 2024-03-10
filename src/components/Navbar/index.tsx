"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { Avatar, Flex, Popover, Typography } from "antd";
import { AlignLeftOutlined } from "@ant-design/icons";
const { Text } = Typography;

import { getIndianDateTime } from "@/lib/client-utils";
import Button from "../Button";
import styles from "./navbar.module.css";

export default function Navbar() {
    const router = useRouter();
    const { data } = useSession();
    const pathname = usePathname();

    const NavItems = [
        {
            label: "Project",
            path: "/dashboard/project",
        },
        {
            label: "Analytics",
            path: "/dashboard/analytics",
        },
        {
            label: "Guide",
            path: "/guide",
        },
    ];

    const ProfilePopoverContent = () => {
        const logoutCallback = () => {
            signOut();
            router.push("/");
        };

        return (
            <Flex vertical gap={8}>
                <Text>{data?.user?.name ?? "Name not available"}</Text>
                <Text>{data?.user?.email ?? "Email not available"}</Text>
                <Text>Session expires at: {getIndianDateTime(data?.expires!)}</Text>
                <Button text="Logout" onClick={logoutCallback} bgColor="#E44236" textColor="white" size="sm" />
            </Flex>
        );
    };

    const NavigationPopoverContent = () => {
        return (
            <Flex vertical gap={8}>
                {NavItems.map((item) => (
                    <Link href={item.path} key={item.label}>
                        {item.label}
                    </Link>
                ))}
            </Flex>
        );
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar__title__container}>
                <h3 className={styles.navbar__title}>Sankhya Pro</h3>
                <h5 className={styles.navbar__subtitle}>संख्या</h5>
            </div>

            <Flex gap={16} align="center">
                <div className={styles.navbar__desktop}>
                    {NavItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.path}
                            className={pathname === item.path ? styles.active_link : ""}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                <div className={styles.navbar__mobile}>
                    <Popover content={NavigationPopoverContent} title="Go to" trigger="hover" placement="bottomRight">
                        <AlignLeftOutlined style={{ fontSize: "24px" }} />
                    </Popover>
                </div>

                <Popover content={ProfilePopoverContent} title="Your profile" trigger="hover" placement="bottomRight">
                    <Avatar src={data?.user?.image ?? ""} style={{ cursor: "pointer" }} />
                </Popover>
            </Flex>
        </nav>
    );
}
