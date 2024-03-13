import { ResponsiveLine } from "@nivo/line";
import CustomTooltip from "./CustomTooltip";
import { TrendChartProps } from "./types";

export default function DaywiseTrendChart({ data, legend }: TrendChartProps) {
    return (
        <div style={{ height: "320px" }}>
            <ResponsiveLine
                data={data}
                margin={{ top: 20, right: 20, bottom: 60, left: 80 }}
                xScale={{
                    type: "time",
                    format: "%Y-%m-%d",
                    precision: "day",
                }}
                xFormat="time:%Y-%m-%d"
                yScale={{
                    type: "linear",
                }}
                axisLeft={{
                    legend,
                    legendPosition: "middle",
                    legendOffset: -60,
                }}
                axisBottom={{
                    format: "%b %d",
                    legend: "Days",
                    legendPosition: "middle",
                    legendOffset: 48,
                }}
                areaBaselineValue={0}
                curve={"monotoneX"}
                colors={["#74B9FF"]}
                pointSize={4}
                pointBorderWidth={1}
                pointBorderColor={{
                    from: "color",
                    modifiers: [["darker", 0.5]],
                }}
                useMesh={true}
                enableSlices={false}
                enableGridX={false}
                enableArea
                tooltip={(data) => CustomTooltip({ chartData: data, type: "daywise" })}
            />
        </div>
    );
}
