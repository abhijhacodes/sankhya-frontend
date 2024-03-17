"use client";

import { LoadingOutlined, RedoOutlined } from "@ant-design/icons";
import styles from "./button.module.css";
import { ReactNode } from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    text: ReactNode;
    onClick: () => void;
    bgColor?: string;
    textColor?: string;
    size?: "sm" | "md" | "lg";
    isLoading?: boolean;
    loadingText?: string;
    icon?: ReactNode;
};

export default function Button({
    text,
    bgColor,
    textColor,
    onClick,
    size = "md",
    isLoading,
    loadingText,
    icon,
}: ButtonProps) {
    return (
        <button
            className={`${styles.custom__btn} ${bgColor ? "" : "default__bg"} ${styles[`${size}__btn`]} ${
                isLoading ? styles.loading : ""
            }`}
            onClick={onClick}
            style={{ backgroundColor: bgColor ?? "", color: textColor ?? "" }}
        >
            {isLoading ? <LoadingOutlined /> : null} {isLoading ? loadingText : text} {icon}
        </button>
    );
}
