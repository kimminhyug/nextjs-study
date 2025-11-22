import { Button } from "@/app/components/button/button";
import Card from "@/app/components/card/card";
import { CardLabel } from "@/app/components/card/card-label";
import { Label } from "@/app/components/text/label";
import { LineChartWidget } from "../widget/chart/line-chart-widget";
import { TextWidget } from "../widget/text-widget";

export default function Traffic() {
  const kpis = [
    {
      circleColor: "bg-blue-500",
      label: "일일 방문자 수 (DAU)",
      value: 16458,
      subText: "전일 대비 +5% ▲",
    },
    {
      circleColor: "bg-green-500",
      label: "월간 방문자 수 (MAU)",
      value: 324568,
      subText: "지난 달 대비 +12% ▲",
    },
    {
      circleColor: "bg-yellow-500",
      label: "신규 vs 재방문자",
      value: "65% / 35%",
      subText: "재방문 증가 추세",
    },
    {
      circleColor: "bg-red-500",
      label: "페이지뷰 / 세션 수",
      value: "102,345 / 23,456",
      subText: "평균 페이지뷰 4.3",
    },
    {
      circleColor: "bg-purple-500",
      label: "Bounce Rate",
      value: "27%",
      subText: "전주 대비 -2% ▼",
    },
    {
      circleColor: "bg-pink-500",
      label: "평균 세션 시간",
      value: "5m 23s",
      subText: "5초 증가",
    },
  ];

  return (
    <main className="p-3 grid gap-3 xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2">
      <Card className="flex col-span-full  text-white bg-emerald-600">
        <div className="flex flex-col gap-3">
          <CardLabel label={"User Life Cycle"} />
          <Label text="2025-11-21 ~ 2025-12-21" />
        </div>
        <div className="ml-auto content-center">
          <Button
            className="hover:bg-emerald-800 hover:text-white "
            textColor="text-emerald-600 "
            bgColor="bg-white "
          >
            Settings
          </Button>
        </div>
      </Card>
      {kpis.map((kpi, idx) => (
        <TextWidget
          key={idx}
          circleColor={kpi.circleColor}
          label={kpi.label}
          text={kpi.value.toLocaleString?.() || kpi.value.toLocaleString()}
          subText={kpi.subText}
        />
      ))}
      <LineChartWidget text={""} subText={""} label={""} />
    </main>
  );
}
