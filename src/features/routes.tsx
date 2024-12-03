import {
  createBrowserRouter,
  LoaderFunction,
  Outlet,
  redirect,
} from "react-router";
import MainLayout from "./layout";
import { routeLogin } from "./login";
import { routePokemon } from "./pokemon";
import { routeDashboard } from "./dashboard";
import { routeWhatsapp } from "./whatsapp";

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
    HydrateFallback: () => <div>Loading...</div>,
    element: (
      <MainLayout>
        <Outlet />
      </MainLayout>
    ),
    children: [...routeDashboard, ...routeWhatsapp, ...routePokemon],
  },
  ...routeLogin,
]);
