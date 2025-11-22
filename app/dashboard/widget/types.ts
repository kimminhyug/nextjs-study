import { CardLabelProps } from "@/app/components/card/types";
import { ReactNode } from "react";

export type WidgetProps = CardLabelProps & {
  className?: string;

  children?: ReactNode;
};

export interface ITextWidgetProps extends WidgetProps {
  text: string;
  subText: string;
}

export interface ILineChartWidgetProps extends WidgetProps {
  text: string;
  subText: string;
}
