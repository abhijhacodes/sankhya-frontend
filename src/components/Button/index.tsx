"use client";

import styles from "./button.module.css";

type ButtonProps = {
    text: string;
    onClick: () => void;
    bgColor?: string;
    textColor?: string;
    size?: "sm" | "md" | "lg";
};

export default function Button({ text, bgColor, textColor, onClick, size = "md" }: ButtonProps) {
    return (
        <button
            className={`${styles.custom__btn} ${bgColor ? "" : "default__bg"} ${styles[`${size}__btn`]}`}
            onClick={onClick}
            style={{ backgroundColor: bgColor ?? "", color: textColor ?? "" }}
        >
            {text}
        </button>
    );
}
