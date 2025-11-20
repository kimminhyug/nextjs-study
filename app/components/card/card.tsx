import { CardProps } from "./types";

export default function Card(props: CardProps) {
  const { className = "", children } = props;

  return (
    <div className={`border  border-card rounded-md p-2.5 ${className}`}>
      {children}
    </div>
  );
}
