"use client";

import { useRouter } from "next/navigation";
import styles from "./navbar.module.css";

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
        </nav>
    );
}
