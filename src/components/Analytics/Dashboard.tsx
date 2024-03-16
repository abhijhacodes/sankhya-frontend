"use client";

import { useState } from "react";
import { Col, Flex, Row, Typography, DatePicker } from "antd";
const { Title, Text } = Typography;
const { RangePicker } = DatePicker;
import dayjs from "dayjs";
import WorldMap from "react-svg-worldmap";

import styles from "./dashboard.module.css";
import AnalyticsWrapper from "./AnalyticsWrapper";
import PieChart from "./Charts/PieChart";
import { ChartColors } from "./constants";
import { useGetAnalyticsData } from "@/lib/hooks/analytics";
import { convertPeriodToHour, formatDate, getSevenDaysAgoDate, getTodayDate } from "@/lib/client-utils";
import DaywiseTrendChart from "./Charts/TrendChart/DaywiseTrendChart";
import HourwiseTrendChart from "./Charts/TrendChart/HourwiseTrendChart";

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
                        isDataAvailable={Boolean(analyticsData?.totalVisitors?.data?.totalVisitors)}
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
                        isDataAvailable={Boolean(analyticsData?.visitorsTrend?.data?.length)}
                    >
                        <DaywiseTrendChart
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
                        title="Hour by hour traffic trend"
                        isLoading={analyticsData?.trafficTrend?.loading}
                        isError={Boolean(analyticsData?.trafficTrend?.error)}
                        isDataAvailable={Boolean(analyticsData?.trafficTrend?.data?.length)}
                    >
                        <HourwiseTrendChart
                            data={[
                                {
                                    id: "trafficTrend",
                                    data: analyticsData?.trafficTrend?.data?.map((item: any, index: number) => ({
                                        x: convertPeriodToHour(item.period, index),
                                        y: item.value,
                                    })),
                                },
                            ]}
                            legend="Total visitors in hour"
                        />
                    </AnalyticsWrapper>
                </Col>

                <Col span={24}>
                    <AnalyticsWrapper
                        title="Top 10 cities by visitors count"
                        isLoading={analyticsData?.topCities?.loading}
                        isError={Boolean(analyticsData?.topCities?.error)}
                        isDataAvailable={Boolean(analyticsData?.topCities?.data?.length)}
                    >
                        <PieChart
                            data={analyticsData?.topCities?.data?.slice(0, 10)?.map((item: any) => ({
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
                        isDataAvailable={Boolean(analyticsData?.topStates?.data?.length)}
                    >
                        <PieChart
                            data={analyticsData?.topStates?.data?.slice(0, 10)?.map((item: any) => ({
                                id: item.name,
                                label: item.name,
                                value: item.value,
                            }))}
                            colors={ChartColors.topStates}
                        />
                    </AnalyticsWrapper>
                </Col>

                <Col span={24}>
                    <AnalyticsWrapper
                        title="Top operating systems"
                        isLoading={analyticsData?.operatingSystems?.loading}
                        isError={Boolean(analyticsData?.operatingSystems?.error)}
                        isDataAvailable={Boolean(analyticsData?.operatingSystems?.data?.length)}
                    >
                        <PieChart
                            data={analyticsData?.operatingSystems?.data?.map((item: any) => ({
                                id: item.name,
                                label: item.name,
                                value: item.value,
                            }))}
                            colors={{ scheme: "category10" }}
                        />
                    </AnalyticsWrapper>
                </Col>

                <Col span={24}>
                    <AnalyticsWrapper
                        title="Top countries by visitors count"
                        isLoading={analyticsData?.topCountries?.loading}
                        isError={Boolean(analyticsData?.topCountries?.error)}
                        isDataAvailable={Boolean(analyticsData?.topCountries?.data?.length)}
                        centerContent
                    >
                        <WorldMap
                            color="#2B2B52"
                            size="xl"
                            data={analyticsData?.topCountries?.data?.map((item: any) => ({
                                country: item.name,
                                value: item.value,
                            }))}
                        />
                    </AnalyticsWrapper>
                </Col>
            </Row>
        </div>
    );
}
