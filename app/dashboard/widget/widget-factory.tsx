"use client";
import { DummyData } from "../hooks/useDummyData";
import { LineChartWidget } from "./chart/line-chart-widget";
import { TextWidget } from "./text-widget";

export interface IWidgetConfig {
  id: string;
  type: "text" | "line-chart";
  label: string;
  circleColor: string;
  dataKey: string;
  className?: string;
}

interface IWidgetFactoryProps {
  config: IWidgetConfig;
  data: DummyData;
}

export const WidgetFactory = ({ config, data }: IWidgetFactoryProps) => {
  const widgetData = (data as any)[config.dataKey];

  switch (config.type) {
    case "text":
      return (
        <TextWidget
          label={config.label}
          circleColor={config.circleColor}
          text={widgetData.text}
          subText={widgetData.subText}
          className={config.className}
        />
      );
    case "line-chart":
      return (
        <LineChartWidget
          label={config.label}
          circleColor={config.circleColor}
          text=""
          subText=""
          chartProps={{
            data: widgetData.data,
            option: widgetData.option,
          }}
          className={config.className}
        />
      );
    default:
      return null;
  }
};
