import { getPercentageValue } from "@/lib/client-utils";
import { ResponsivePie } from "@nivo/pie";

type TrendChartProps = {
    data: any;
    colors?: any;
};

const DefaultPieChartColors = [
    "#004c6d",
    "#146080",
    "#267693",
    "#378ba6",
    "#49a2b9",
    "#5db8cb",
    "#71d0dd",
    "#87e7ee",
    "#9effff",
    "#c1f7f7",
];

export default function PieChart({ data, colors }: TrendChartProps) {
    const total = data?.reduce((acc: number, item: any) => acc + item.value, 0);
    const PieChartColors = colors ?? DefaultPieChartColors;

    return (
        <div style={{ height: "320px" }}>
            <ResponsivePie
                data={data}
                margin={{ top: 30, right: 30, bottom: 30, left: 30 }}
                innerRadius={0.2}
                colors={PieChartColors}
                activeOuterRadiusOffset={8}
                borderWidth={1}
                animate={true}
                enableArcLabels={true}
                borderColor={{
                    from: "color",
                    modifiers: [["darker", 0.2]],
                }}
                arcLabel={(datum) => `${datum.value} (${getPercentageValue({ value: datum.value, total })}%)`}
                arcLinkLabelsDiagonalLength={12}
                arcLinkLabelsStraightLength={16}
                arcLabelsSkipAngle={20}
                arcLabelsTextColor={"white"}
            />
        </div>
    );
}
