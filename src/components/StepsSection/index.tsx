import Footer from "../Footer";
import StepsCard, { StepsCardProps } from "./StepsCard";
import styles from "./steps.module.css";

const stepsData: StepsCardProps[] = [
    {
        stepNumber: 1,
        title: "Login to Sankhya Pro",
        description: "You can only login using your Github account.",
    },
    {
        stepNumber: 2,
        title: "Create a new project",
        description: "Create a new project on dashboard, at the moment you can only create one project.",
    },
    {
        stepNumber: 3,
        title: "Integrate API",
        description:
            "Integrate our simple API in any of your client apps and get started, no extra steps or configuration.",
    },
];

export default function StepsSection() {
    return (
        <div className={styles.steps__section}>
            <h1 className={styles.steps__title}>Get started in 3 easy steps</h1>
            <div className={styles.cards__container}>
                {stepsData.map((data) => (
                    <StepsCard
                        stepNumber={data.stepNumber}
                        title={data.title}
                        description={data.description}
                        key={data.title}
                    />
                ))}
            </div>

            <Footer />
        </div>
    );
}
