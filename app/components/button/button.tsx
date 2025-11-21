import { ButtonProps } from "./types";

export const Button = ({
  onClick,
  children,
  className = "",
  textColor = "text-white",
  bgColor = "bg-blue-500",
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer px-4 py-2 rounded font-medium transition-colors duration-200 focus:outline-none ${bgColor} ${textColor} ${
        className || ""
      }`}
    >
      {children}
    </button>
  );
};
