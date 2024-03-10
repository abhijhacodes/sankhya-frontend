import { useState, useEffect } from "react";
import { AxiosError } from "axios";

import DefaultAxiosInstance from "@/services/clients/axios";
import { analyticsEndpoints } from "../constants";

interface AnalyticsState {
    loading: boolean;
    error: AxiosError | unknown;
    data: any;
}

type AnalyticsEndpointType = (typeof analyticsEndpoints)[number];

export const useGetAnalyticsData = (projectId: string) => {
    const [analyticsStates, setAnalyticsStates] = useState<Record<AnalyticsEndpointType, AnalyticsState>>(
        {} as Record<AnalyticsEndpointType, AnalyticsState>
    );

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

                            const response = await DefaultAxiosInstance.post(`/analytics/${endpoint}`, {
                                project_ids: [projectId],
                                start_date: "2024-01-01",
                                end_date: "2024-03-10",
                            });

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
    }, []);

    return analyticsStates;
};
