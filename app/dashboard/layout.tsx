import { ReactNode } from "react";
import DashboardHeader from "./header/page";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <DashboardHeader />
      <div>{children}</div>
    </div>
  );
}
