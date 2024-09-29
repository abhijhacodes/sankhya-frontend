import Image from "next/image";
import HeroHeader from "../Navbar/Header";
import styles from "./hero.module.css";
import CTASection from "./CTASection";

export default function HeroSection() {
    return (
        <div className={styles.home__section}>
            <HeroHeader />
            <div className={styles.hero__section}>
                <div className={styles.hero__intro}>
                    <h2>Get useful insights about your users and traffic without any hassle</h2>
                    <h4>
                        Sankhya is a privacy friendly, cookie-free and open source user analytics tool for all your web
                        apps
                    </h4>
                </div>
                <div className={styles.charts__section}>
                    <Image src={"/assets/TotalPageVisits.svg"} alt="Total page visits" width={360} height={180} />
                    <Image src={"/assets/CityWiseDistribution.svg"} alt="City wise traffic" width={420} height={240} />
                    <Image src={"/assets/PageVisitTraffic.svg"} alt="Page visits trend" width={480} height={180} />
                </div>
                <CTASection />
            </div>
        </div>
    );
}
