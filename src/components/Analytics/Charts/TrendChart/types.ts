import { PointTooltipProps } from "@nivo/line";

export type TrendChartProps = {
    data: any;
    legend: string;
};

export type TrendChartTooltipProps = {
    chartData: PointTooltipProps;
    type: "hourwise" | "daywise";
};
