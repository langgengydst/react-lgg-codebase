import {
  createBrowserRouter,
  LoaderFunction,
  Outlet,
  redirect,
} from "react-router-dom";
import { routeDashboard } from "./dashboard";
import MainLayout from "./layout";
import { routeLogin } from "./login";
import { routePokemon } from "./pokemon";

const rootLoader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const isAuthorized = true;
  if (url.pathname === "/" && isAuthorized) {
    return redirect("/dashboard");
  } else if (url.pathname === "/" && !isAuthorized) {
    return redirect("/login");
  }
  return null;
};

export const routes = createBrowserRouter([
  {
    id: "root",
    path: "/",
    loader: rootLoader,
    element: (
      <MainLayout>
        <Outlet />
      </MainLayout>
    ),
    children: [...routeDashboard, ...routePokemon],
  },
  ...routeLogin,
]);
