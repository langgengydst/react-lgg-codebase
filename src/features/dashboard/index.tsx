import { defer, RouteObject } from "react-router-dom";
import DashboardLayout from "./layout";
import { queryClient } from "@/providers/query-provider";

export const routeDashboard = [
  {
    id: "dashboard",
    handle: {
      title: "Dashboard",
    },
    Component: DashboardLayout,
    children: [
      {
        index: true,
        path: "dashboard",
        handle: {
          title: "Dashboard",
        },
        async lazy() {
          const { DashboardPage, dashboardLoader } = await import("./page");

          return {
            loader: async ({ request }) => {
              const { data, filter } = dashboardLoader(queryClient, {
                request,
              });
              return defer({ data, filter });
            },
            Component: DashboardPage,
          };
        },
      },
      {
        path: "tes",
        handle: {
          title: "Tes",
        },
        async lazy() {
          const { DashboardPage, dashboardLoader } = await import("./page");

          return {
            loader: async ({ request }) => {
              const { data, filter } = dashboardLoader(queryClient, {
                request,
              });
              return defer({ data, filter });
            },
            Component: DashboardPage,
          };
        },
      },
    ],
  },
] satisfies RouteObject[];
