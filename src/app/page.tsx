import Image from "next/image";

import styles from "./page.module.css";
import NavBar from "@/components/Navbar";
import CTASection from "@/components/CTASection";

export default function Home() {
    return (
        <main className={styles.main}>
            <NavBar />
            <div className={styles.hero__section}>
                <h2 className={styles.hero__description}>Get useful insights about your users without any hassle</h2>
                <div className={styles.charts__section}>
                    <Image src={"/assets/TotalPageVisits.svg"} alt="Total page visits" width={360} height={180} />
                    <Image src={"/assets/CityWiseDistribution.svg"} alt="City wise traffic" width={420} height={240} />
                    <Image src={"/assets/PageVisitTraffic.svg"} alt="Page visits trend" width={480} height={180} />
                </div>
                <CTASection />
            </div>
        </main>
    );
}
