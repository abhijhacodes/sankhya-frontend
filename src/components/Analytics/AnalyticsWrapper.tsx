import { Card, Skeleton, Typography } from "antd";
import { ReactNode } from "react";
const { Title } = Typography;

type AnalyticsWrapperProps = {
    title: string;
    isLoading: boolean;
    isError: boolean;
    isDataAvailable: boolean;
    children: ReactNode;
    centerContent?: boolean;
};

export default function AnalyticsWrapper({
    title,
    isLoading,
    isError,
    isDataAvailable,
    children,
    centerContent = false,
}: AnalyticsWrapperProps) {
    const getContent = () => {
        if (isLoading) {
            return <Skeleton active />;
        }
        if (isError) {
            return "Something went wrong. Please try again.";
        }
        if (!isDataAvailable) {
            return "No data available";
        }
        return children;
    };

    return (
        <Card className="analytics-card">
            <Title level={5}>{title}</Title>
            {centerContent ? (
                <div style={{ width: "100%", display: "grid", placeItems: "center" }}>{getContent()}</div>
            ) : (
                getContent()
            )}
        </Card>
    );
}
