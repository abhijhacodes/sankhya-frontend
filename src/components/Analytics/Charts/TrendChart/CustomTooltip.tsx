import { formatDate } from "@/lib/client-utils";
import { TrendChartTooltipProps } from "./types";

export default function CustomTooltip({
    chartData: {
        point: { data },
    },
    type,
}: TrendChartTooltipProps) {
    return (
        <div className="custom-chart-toolip">
            {data?.yFormatted} visitors{" "}
            {type === "daywise" ? `on ${formatDate(data?.xFormatted as string)}` : `during ${data?.xFormatted}`}
        </div>
    );
}
