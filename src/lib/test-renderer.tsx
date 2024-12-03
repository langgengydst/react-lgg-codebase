import QueryProvider from "@/providers/query-provider";
import { PropsWithChildren } from "react";
import { createMemoryRouter, RouterProvider } from "react-router";
import { render as baseRender } from "vitest-browser-react";

const Router = ({ children }: PropsWithChildren) =>
  createMemoryRouter(
    [
      {
        path: "/:id",
        element: <>{children}</>,
      },
    ],
    {
      initialEntries: ["/test"],
    },
  );

export const MockProvider = ({ children }: PropsWithChildren) => {
  return (
    <QueryProvider>
      <RouterProvider router={Router({ children })} />
    </QueryProvider>
  );
};

export const render = (children: React.ReactNode) => {
  return baseRender(<MockProvider>{children}</MockProvider>);
};
