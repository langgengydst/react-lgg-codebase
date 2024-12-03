import { Outlet } from "react-router";
import { BaseRouteObject } from "@/types/router";

export const routeDashboard = [
  {
    id: "dashboard",
    path: "dashboard",
    handle: {
      menu: "Dashboard",
    },
    element: <Outlet />,
    children: [
      {
        index: true,
        async lazy() {
          const { DashboardPage } = await import("./page");

          return {
            Component: DashboardPage,
          };
        },
      },
    ],
  },
] satisfies BaseRouteObject[];
