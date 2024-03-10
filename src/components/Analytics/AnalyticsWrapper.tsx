import { Card, Skeleton, Typography } from "antd";
import { ReactNode } from "react";
const { Title } = Typography;

type AnalyticsWrapperProps = {
    title: string;
    isLoading: boolean;
    isError: boolean;
    children: ReactNode;
};

export default function AnalyticsWrapper({ title, isLoading, isError, children }: AnalyticsWrapperProps) {
    return (
        <Card className="analytics-card">
            <Title level={5}>{title}</Title>
            {isLoading ? <Skeleton /> : isError ? "Something went wrong. Please try again." : children}
        </Card>
    );
}
