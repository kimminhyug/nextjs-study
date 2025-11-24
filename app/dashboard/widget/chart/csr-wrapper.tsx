"use client";
import { CustomChartProps } from "@/app/components/chart/types";
import dynamic from "next/dynamic";

const LineChartCSR = dynamic(() => import("@/app/components/chart/line"), {
  ssr: false,
});

export const CsrWrapper = (props: CustomChartProps) => {
  return (
    <>
      <LineChartCSR {...(props || {})} />
    </>
  );
};
