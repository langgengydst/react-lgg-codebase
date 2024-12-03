import { Outlet } from "react-router";
import DashboardLayout from "./layout";
import { BaseRouteObject } from "@/types/router";
import { subRoutesWhatsapp } from "./pages";

export const routeWhatsapp = [
  {
    id: "whatsapp",
    path: "whatsapp",
    handle: {
      menu: "Whatsapp",
    },
    element: <Outlet />,
    children: [
      {
        path: "broadcast",
        handle: {
          subMenu: "Broadcast",
        },
        Component: DashboardLayout,
        children: [
          {
            index: true,
            async lazy() {
              const { WhatsappPage } = await import("./page");

              return {
                Component: WhatsappPage,
              };
            },
          },
          ...subRoutesWhatsapp,
        ],
      },
      {
        path: "whatsapp-usage",
        handle: {
          subMenu: "Whatsapp Usage",
        },
        children: [
          {
            index: true,
            async lazy() {
              const { WhatsappPage } = await import("./page");

              return {
                Component: WhatsappPage,
              };
            },
          },
          ...subRoutesWhatsapp,
        ],
      },
    ],
  },
] satisfies BaseRouteObject[];
