import { generateDummyData } from "./hooks/useDummyData";
import WidgetConfigJson from "./widget-config.json";
import { IWidgetConfig, WidgetFactory } from "./widget/widget-factory";

async function getWidgetConfig() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
    cache: "no-store",
  }).then((r) => WidgetConfigJson as { widgets: IWidgetConfig[] });

  return res;
}

export default async function Dashboard() {
  const configs = await getWidgetConfig();
  const data = generateDummyData();
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">대시보드</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 aut-rows-fr gap-6">
        {configs.widgets.map((config) => (
          <div key={config.id} className={config.className}>
            <WidgetFactory config={config} data={data} />
          </div>
        ))}
      </div>
    </main>
  );
}
