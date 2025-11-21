import { CardLabelProps } from "@/app/components/card/types";
import { ReactNode } from "react";

export type WidgetProps = CardLabelProps & {
  className?: string;

  children?: ReactNode;
};

export interface ITextWidget extends WidgetProps {
  text: string;
  subText: string;
}
