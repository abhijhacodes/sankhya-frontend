import { ResponsiveLine } from "@nivo/line";
import { TrendChartProps } from "./types";
import CustomTooltip from "./CustomTooltip";

export default function HourwiseTrendChart({ data, legend }: TrendChartProps) {
    return (
        <div style={{ height: "320px" }}>
            <ResponsiveLine
                data={data}
                margin={{ top: 20, right: 20, bottom: 90, left: 80 }}
                axisLeft={{
                    legend,
                    legendPosition: "middle",
                    legendOffset: -60,
                }}
                axisBottom={{
                    legend: "Hour of the day",
                    legendPosition: "middle",
                    legendOffset: 80,
                    tickRotation: -60,
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
                tooltip={(data) => CustomTooltip({ chartData: data, type: "hourwise" })}
            />
        </div>
    );
}
