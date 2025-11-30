import { ILineChartWidgetProps } from "../types";
import { WidgetWrapper } from "../widget-wrapper";
import { CsrWrapper } from "./csr-wrapper";

export const LineChartWidget = ({
  label,
  className = "",
  chartProps = {},
}: ILineChartWidgetProps) => {
  return (
    <WidgetWrapper label={label} className={`${className} h-[300px]`}>
      <div className="flex-1 min-h-0">
        <CsrWrapper {...chartProps} />
      </div>
    </WidgetWrapper>
  );
};
