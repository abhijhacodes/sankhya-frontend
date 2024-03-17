import { Card, Flex, Typography } from "antd";
const { Title, Text } = Typography;
import styles from "./error.module.css";
import Button from "../Button";
import { useRouter } from "next/navigation";

export default function ErrorUI({
    message = "We are working hard to fix this. Please try again in some time.",
    retryCallback,
}: {
    message?: string;
    retryCallback?: () => void;
}) {
    const router = useRouter();
    const retry = () => {
        if (retryCallback) {
            return retryCallback();
        }
        router.back();
    };

    return (
        <div className={styles.error__container}>
            <Card className={styles.error_card}>
                <Title type="danger">Something went wrong!</Title>
                <Flex align="center" gap="16px">
                    <Text>{message}</Text>
                    <Button onClick={retry} text="Try again" size="sm" />
                </Flex>
            </Card>
        </div>
    );
}
