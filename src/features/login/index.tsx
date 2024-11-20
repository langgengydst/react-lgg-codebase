import { RouteObject } from "react-router-dom";

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
