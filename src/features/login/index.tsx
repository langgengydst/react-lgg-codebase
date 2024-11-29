import { RouteObject } from "react-router";

export const routeLogin = [
  {
    id: "login",
    path: "login",
    async lazy() {
      const { LoginPage } = await import("./page");

      return {
        Component: LoginPage,
      };
    },
  },
] satisfies RouteObject[];
