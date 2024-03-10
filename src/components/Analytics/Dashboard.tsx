"use client";

import { useState } from "react";
import { Col, Flex, Row, Typography, DatePicker } from "antd";
const { Title, Text } = Typography;
const { RangePicker } = DatePicker;
import dayjs from "dayjs";

import styles from "./dashboard.module.css";
import AnalyticsWrapper from "./AnalyticsWrapper";
import PieChart from "./Charts/PieChart";
import TrendChart from "./Charts/TrendChart";
import { ChartColors } from "./constants";
import { useGetAnalyticsData } from "@/lib/hooks/analytics";
import { formatDate, getSevenDaysAgoDate, getTodayDate } from "@/lib/client-utils";

type DashboardProps = {
    projectId: string;
};

export default function Dashboard({ projectId }: DashboardProps) {
    const [selectedDateRange, setSelectedDateRange] = useState<any>({
        startDate: getSevenDaysAgoDate(),
        endDate: getTodayDate(),
    });

    const onDateChange = (dates: any) => {
        setSelectedDateRange({
            startDate: dates[0],
            endDate: dates[1],
        });
    };

    const analyticsData = useGetAnalyticsData(projectId);

    return (
        <div className={styles.dashboard__container}>
            <Row style={{ gap: "16px" }}>
                <Col span={7}>
                    <AnalyticsWrapper
                        title="Total visitors"
                        isLoading={analyticsData?.totalVisitors?.loading}
                        isError={Boolean(analyticsData?.totalVisitors?.error)}
                    >
                        <Title level={3} style={{ margin: "0" }}>
                            {analyticsData?.totalVisitors?.data?.totalVisitors}
                        </Title>
                    </AnalyticsWrapper>
                </Col>

                <Col span={10}>
                    <Flex justify="center" align="flexStart" vertical style={{ height: "100%" }} gap={8}>
                        <RangePicker
                            onChange={onDateChange}
                            format="YYYY-MM-DD"
                            value={[dayjs(selectedDateRange.startDate), dayjs(selectedDateRange.endDate)]}
                            disabledDate={(current) => {
                                return current && current > dayjs().endOf("day");
                            }}
                        />
                        {selectedDateRange.startDate && selectedDateRange.endDate ? (
                            <Flex gap={8}>
                                <Text>
                                    <b>From</b>: {formatDate(selectedDateRange.startDate)}
                                </Text>
                                <Text>
                                    <b>To</b>: {formatDate(selectedDateRange.endDate)}
                                </Text>
                            </Flex>
                        ) : null}
                    </Flex>
                </Col>

                <Col span={24}>
                    <AnalyticsWrapper
                        title="Total visitors trend"
                        isLoading={analyticsData?.visitorsTrend?.loading}
                        isError={Boolean(analyticsData?.visitorsTrend?.error)}
                    >
                        <TrendChart
                            data={[
                                {
                                    id: "totalVisitorsTrend",
                                    data: analyticsData?.visitorsTrend?.data?.map((item: any) => ({
                                        x: item.date,
                                        y: item.value,
                                    })),
                                },
                            ]}
                            legend="Total visitors"
                        />
                    </AnalyticsWrapper>
                </Col>

                <Col span={24}>
                    <AnalyticsWrapper
                        title="Top 10 cities by visitors count"
                        isLoading={analyticsData?.topCities?.loading}
                        isError={Boolean(analyticsData?.topCities?.error)}
                    >
                        <PieChart
                            data={analyticsData?.topCities?.data?.map((item: any) => ({
                                id: item.name,
                                label: item.name,
                                value: item.value,
                            }))}
                        />
                    </AnalyticsWrapper>
                </Col>

                <Col span={24}>
                    <AnalyticsWrapper
                        title="Top 10 states by visitors count"
                        isLoading={analyticsData?.topStates?.loading}
                        isError={Boolean(analyticsData?.topStates?.error)}
                    >
                        <PieChart
                            data={analyticsData?.topStates?.data?.map((item: any) => ({
                                id: item.name,
                                label: item.name,
                                value: item.value,
                            }))}
                            colors={ChartColors.topStates}
                        />
                    </AnalyticsWrapper>
                </Col>
            </Row>
        </div>
    );
}
