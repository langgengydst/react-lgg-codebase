import { routes } from "@/features/routes";
import { RouterProvider as Provider } from "react-router-dom";

export default function RouterProvider() {
  return <Provider router={routes} />;
}
