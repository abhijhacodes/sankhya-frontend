"use client";

import Button from "../Button";
import styles from "./navbar.module.css";

export default function HeroHeader() {
    return (
        <nav className={styles.header}>
            <div className={styles.navbar__title__container}>
                <h3 className={styles.navbar__title}>Sankhya Pro</h3>
                <h5 className={styles.navbar__subtitle}>संख्या</h5>
            </div>
            <Button text="Launching soon" onClick={() => {}} bgColor="#f6dfff" />
        </nav>
    );
}
