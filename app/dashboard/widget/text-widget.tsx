import { Label } from "@/app/components/text/label";
import { ITextWidgetProps } from "./types";
import { WidgetWrapper } from "./widget-wrapper";

export const TextWidget = ({
  label,
  text,
  subText,
  circleColor,
  className = "",
}: ITextWidgetProps) => {
  return (
    <WidgetWrapper
      label={label}
      className={className}
      circleColor={circleColor}
    >
      <Label text={text} size="LARGEST" />
      <Label text={subText} size="SMALL" className="text-gray-500" />
    </WidgetWrapper>
  );
};
