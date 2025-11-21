import { CardLabelProps } from "./types";

export const CardLabel = ({ label, circleColor }: CardLabelProps) => {
  return (
    <span className="text-lg ">
      {circleColor && (
        <span
          className={`inline-block mr-1 rounded-full h-3.5 w-3.5 ${circleColor}`}
        />
      )}
      {label}
    </span>
  );
};
