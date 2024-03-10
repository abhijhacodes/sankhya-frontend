import { getPercentageValue } from "@/lib/client-utils";
import { ResponsivePie } from "@nivo/pie";
import { Flex } from "antd";
import styles from "./charts.module.css";

type TrendChartProps = {
    data: any;
    colors?: string[];
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
    const total = data.reduce((acc: number, item: any) => acc + item.value, 0);
    const PieChartColors = colors ?? DefaultPieChartColors;

    return (
        <div className={styles.piechart__container}>
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
                enableArcLinkLabels={false}
                arcLabelsSkipAngle={20}
                arcLabelsTextColor={"white"}
            />
            <div className={styles.legend__grid}>
                {data.map((item: any, index: number) => (
                    <Flex align="center" key={item.id}>
                        <div
                            className={styles.legend__box}
                            style={{
                                backgroundColor: PieChartColors[index % PieChartColors.length],
                            }}
                        />
                        <span>{item.id}</span>
                    </Flex>
                ))}
            </div>
        </div>
    );
}
