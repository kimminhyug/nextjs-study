import { Label } from "@/app/components/text/label";
import { ITextWidget } from "./types";
import { WidgetWrapper } from "./widget-wrapper";

export const TextWidget = ({
  label,
  text,
  subText,
  circleColor,
  className = "",
}: ITextWidget) => {
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
