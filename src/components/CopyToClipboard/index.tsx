"use client";

import { Typography } from "antd";
const { Paragraph } = Typography;

type CopyToClipboardProps = {
    text: string;
};

export default function CopyToClipboard({ text }: CopyToClipboardProps) {
    return (
        <Paragraph
            copyable={{
                tooltips: ["Copy to clipboard", "Copied to clipboard!"],
            }}
        >
            <code>{text}</code>
        </Paragraph>
    );
}
