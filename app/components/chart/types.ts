import { ChartType, DefaultDataPoint } from "chart.js";
import { ChartProps } from "react-chartjs-2";

export interface IChart<
  TType extends ChartType = ChartType,
  TData = DefaultDataPoint<TType>,
  TLabel = unknown
> {
  data?: ChartProps<TType, TData>["data"];
  option?: ChartProps<TType, TLabel>["options"];
}

export interface ILineChartProps extends IChart<"line"> {
  showPoint?: boolean;
}

// {}-> 임시 더미로, 추후 차트 추가 시 변경
export type CustomChartProps = ILineChartProps & {};
