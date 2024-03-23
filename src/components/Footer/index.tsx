"use client";

import { Flex } from "antd";
import Link from "next/link";

const Footer = () => {
    return (
        <footer style={{ marginBottom: "1.5rem" }}>
            <Flex justify="center">
                <p style={{ textShadow: "1px 1px 2px green" }}>
                    Developed and maintained by{" "}
                    <Link href="https://abhijha.in" target="_blank">
                        Abhishek Jha
                    </Link>
                </p>
            </Flex>
        </footer>
    );
};

export default Footer;
