import { useState, useEffect } from "react";
import { AxiosError } from "axios";
import dayjs from "dayjs";

import { analyticsEndpoints } from "../constants";
import { getClientSideHeaders } from "../client-utils";
import DefaultAxiosInstance from "@/services/api-client";

interface AnalyticsState {
    loading: boolean;
    error: AxiosError | unknown;
    data: any;
}

type AnalyticsEndpointType = (typeof analyticsEndpoints)[number];

export const useGetAnalyticsData = (projectId: string, dateRange: any) => {
    const [analyticsStates, setAnalyticsStates] = useState<Record<AnalyticsEndpointType, AnalyticsState>>(
        {} as Record<AnalyticsEndpointType, AnalyticsState>
    );

    const parseDate = (date: Date, type: "start" | "end") => {
        if (type === "start") {
            return dayjs(date).startOf("day").toISOString();
        }
        return dayjs(date).endOf("day").toISOString();
    };

    useEffect(() => {
        const fetchAllAnalyticsData = async () => {
            try {
                await Promise.allSettled(
                    analyticsEndpoints.map(async (endpoint) => {
                        try {
                            setAnalyticsStates((prevStates) => ({
                                ...prevStates,
                                [endpoint]: { loading: true, error: null, data: null },
                            }));

                            const response = await DefaultAxiosInstance.post(
                                `/analytics/${endpoint}`,
                                {
                                    project_ids: [projectId],
                                    start_date: parseDate(dateRange?.startDate, "start"),
                                    end_date: parseDate(dateRange?.endDate, "end"),
                                },
                                {
                                    headers: getClientSideHeaders(),
                                }
                            );

                            setAnalyticsStates((prevStates) => ({
                                ...prevStates,
                                [endpoint]: { loading: false, error: null, data: response.data.data },
                            }));
                        } catch (error) {
                            setAnalyticsStates((prevStates) => ({
                                ...prevStates,
                                [endpoint]: { loading: false, error, data: null },
                            }));
                        }
                    })
                );
            } catch (error) {
                console.error("Error fetching analytics data:", error);
            }
        };

        fetchAllAnalyticsData();
    }, [projectId, dateRange]);

    return analyticsStates;
};
