import QueryProvider from "./query-provider";
import RouterProvider from "./router-provider";

export default function Providers() {
  return (
    <QueryProvider>
      <RouterProvider />
    </QueryProvider>
  );
}
