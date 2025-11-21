import Card from "@/app/components/card/card";
import { CardLabel } from "@/app/components/card/card-label";
import { WidgetProps } from "./types";

export const WidgetWrapper = ({
  label,
  circleColor,
  children,
  className = "",
}: WidgetProps) => {
  return (
    <Card className={`flex flex-col gap-3 ${className}`}>
      <CardLabel label={label} circleColor={circleColor} />
      {children}
    </Card>
  );
};
