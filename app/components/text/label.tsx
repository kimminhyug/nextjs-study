import { useMemo } from "react";
import { LabelProps } from "./types";

export const Label = ({
  size = "NORMAL",
  text = "",
  className = "",
}: LabelProps) => {
  const textSize = useMemo(
    () => ({
      SMALL: "text-sm",
      NORMAL: "text-base",
      LARGE: "text-xl",
      LARGER: "text-2xl",
      LARGEST: "text-3xl",
    }),
    []
  );
  return <span className={`${textSize[size]} ${className} `}>{text}</span>;
};
