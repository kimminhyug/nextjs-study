"use client";
import dynamic from "next/dynamic";
import { ILineChartWidgetProps } from "../types";

const LineChartCSR = dynamic(() => import("@/app/components/chart/line"), {
  ssr: false,
});

export const CsrWrapper = ({}: ILineChartWidgetProps) => {
  return (
    <>
      <LineChartCSR />
    </>
  );
};
