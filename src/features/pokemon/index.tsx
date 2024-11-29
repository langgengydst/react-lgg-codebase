import { RouteObject } from "react-router";
import { queryClient } from "@/providers/query-provider";

export const routePokemon = [
  {
    id: "pokemon",
    path: "pokemon",
    handle: {
      title: "Pokemon",
    },
    async lazy() {
      const { PokemonPage, pokemonLoader } = await import("./page");

      return {
        loader: async ({ request }) => {
          const { data, filter } = pokemonLoader(queryClient, {
            request,
          });
          return { data, filter };
        },
        Component: PokemonPage,
      };
    },
  },
] satisfies RouteObject[];
