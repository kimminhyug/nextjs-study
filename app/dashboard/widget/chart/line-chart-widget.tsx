import { ILineChartWidgetProps } from "../types";
import { WidgetWrapper } from "../widget-wrapper";
import { CsrWrapper } from "./csr-wrapper";

export const LineChartWidget = ({
  label,
  className = "",
  chartProps = {},
}: ILineChartWidgetProps) => {
  return (
    <WidgetWrapper label={label} className={className}>
      <CsrWrapper {...chartProps} />
    </WidgetWrapper>
  );
};
