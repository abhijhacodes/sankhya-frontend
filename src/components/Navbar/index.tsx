"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { Dropdown } from "antd";
import type { MenuProps } from "antd";
import { AlignLeftOutlined } from "@ant-design/icons";

import Button from "../Button";
import styles from "./navbar.module.css";

const menuItems: MenuProps["items"] = [
    {
        key: "1",
        label: <Link href="/dashboard/project">Project</Link>,
    },
    {
        key: "2",
        label: <Link href="/dashboard/analytics">Analytics</Link>,
    },
    {
        key: "3",
        label: <Link href="/guide">Guide</Link>,
    },
    {
        key: "4",
        label: <Button text="Logout" onClick={signOut} bgColor="#f6dfff" />,
    },
];

export default function Navbar() {
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

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar__title__container}>
                <h3 className={styles.navbar__title}>Sankhya Pro</h3>
                <h5 className={styles.navbar__subtitle}>संख्या</h5>
            </div>
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
                <Button text="Logout" onClick={signOut} bgColor="#f6dfff" />
            </div>

            <div className={styles.navbar__mobile}>
                <Dropdown menu={{ items: menuItems }} placement="bottomRight" arrow>
                    <AlignLeftOutlined style={{ fontSize: "24px" }} />
                </Dropdown>
            </div>
        </nav>
    );
}
