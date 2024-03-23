"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { Dropdown, Flex, MenuProps } from "antd";
import { GithubOutlined } from "@ant-design/icons";

import styles from "./navbar.module.css";
import Button from "../Button";

const dropdownItems: MenuProps["items"] = [
    {
        key: "1",
        label: (
            <Link href="https://github.com/abhijhacodes/sankhya-backend" target="_blank">
                Backend repo
            </Link>
        ),
    },
    {
        key: "2",
        label: (
            <Link href="https://github.com/abhijhacodes/sankhya-frontend" target="_blank">
                Frontend repo
            </Link>
        ),
    },
];

export default function HeroHeader() {
    const router = useRouter();
    const onLogoClick = () => {
        router.push("/");
    };

    return (
        <nav className={styles.header}>
            <div className={styles.navbar__title__container} onClick={onLogoClick}>
                <h3 className={styles.navbar__title}>Sankhya Pro</h3>
                <h5 className={styles.navbar__subtitle}>संख्या</h5>
            </div>

            <Dropdown menu={{ items: dropdownItems }} placement="bottom">
                <Flex align="center" gap="4px">
                    <Button
                        text="View on Github"
                        size="sm"
                        onClick={() => {}}
                        icon={<GithubOutlined style={{ fontSize: "18px" }} />}
                    />
                </Flex>
            </Dropdown>
        </nav>
    );
}
