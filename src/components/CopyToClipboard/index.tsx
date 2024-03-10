"use client";

import { useEffect, useState } from "react";
import { Flex, Typography } from "antd";
import { CheckCircleFilled, CopyOutlined } from "@ant-design/icons";
const { Text } = Typography;

type CopyToClipboardProps = {
    text: string;
};

export default function CopyToClipboard({ text }: CopyToClipboardProps) {
    const [showCopied, setShowCopied] = useState(false);
    let timeoutId: ReturnType<typeof setTimeout>;

    const copyToClipboard = () => {
        navigator.clipboard.writeText(text);
        setShowCopied(true);

        timeoutId = setTimeout(() => {
            setShowCopied(false);
        }, 2000);
    };

    useEffect(() => {
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <Flex justify="space-between">
            <Text>{text}</Text>
            {showCopied ? (
                <CheckCircleFilled style={{ color: "green", fontSize: "18px" }} />
            ) : (
                <CopyOutlined onClick={copyToClipboard} style={{ fontSize: "18px" }} />
            )}
        </Flex>
    );
}
