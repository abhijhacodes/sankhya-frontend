"use client";

import styles from "./cta.module.css";
import Button from "../Button";

export default function CTASection() {
    return (
        <div className={styles.cta__section}>
            <Button text="Get Started" onClick={() => {}} bgColor="#ff7a5c" textColor="#fff" size="lg" />
            <Button text="See how it works" onClick={() => {}} bgColor="#ff7a5c" textColor="#fff" size="lg" />
        </div>
    );
}
