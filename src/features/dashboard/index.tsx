import { Outlet } from "react-router";
import DashboardLayout from "./layout";
import { queryClient } from "@/providers/query-provider";
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
        path: "admin-dashboard",
        handle: {
          subMenu: "Admin Dashboard",
        },
        Component: DashboardLayout,
        children: [
          {
            index: true,
            async lazy() {
              const { DashboardPage, dashboardLoader } = await import("./page");

              return {
                loader: async ({ request }) => {
                  const { data, filter } = dashboardLoader(queryClient, {
                    request,
                  });
                  return { data, filter };
                },
                Component: DashboardPage,
              };
            },
          },
          {
            path: ":id",
            async lazy() {
              const { DashboardDetailPage } = await import("./detail/page");

              return {
                Component: DashboardDetailPage,
              };
            },
          },
        ],
      },
      {
        path: "member-dashboard",
        handle: {
          subMenu: "Member Dashboard",
        },
        async lazy() {
          const { DashboardPage, dashboardLoader } = await import("./page");

          return {
            loader: async ({ request }) => {
              const { data, filter } = dashboardLoader(queryClient, {
                request,
              });
              return { data, filter };
            },
            Component: DashboardPage,
          };
        },
      },
    ],
  },
] satisfies BaseRouteObject[];
