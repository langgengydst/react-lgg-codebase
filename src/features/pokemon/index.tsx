import { Outlet } from "react-router";
import { queryClient } from "@/providers/query-provider";
import { BaseRouteObject } from "@/types/router";
import { subRoutesPokemon } from "./pages";

export const routePokemon = [
  {
    id: "pokemon",
    path: "pokemon",
    handle: {
      menu: "Pokemon",
    },
    element: <Outlet />,
    children: [
      {
        index: true,
        async lazy() {
          const { PokemonPage, pokemonLoader } = await import("./page");

          return {
            loader: async ({ request }) =>
              pokemonLoader(queryClient, {
                request,
              }),
            Component: PokemonPage,
          };
        },
      },
      ...subRoutesPokemon,
    ],
  },
] satisfies BaseRouteObject[];
