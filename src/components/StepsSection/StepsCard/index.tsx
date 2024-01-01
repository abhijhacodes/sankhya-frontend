import styles from "./stepcard.module.css";

export type StepsCardProps = {
    stepNumber: number;
    title: string;
    description: string;
};

export default function StepsCard({ stepNumber, title, description }: StepsCardProps) {
    return (
        <div className={styles.steps__card}>
            <div className={styles.number__container}>
                <h3>{stepNumber}</h3>
            </div>
            <div className={styles.text__container}>
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
}
