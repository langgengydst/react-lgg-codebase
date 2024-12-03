import { queryClient } from "@/providers/query-provider";
import { BaseRouteObject } from "@/types/router";

export const routeDetailPokemon = {
  path: ":id",

  async lazy() {
    const { PokemonDetailPage, pokemonLoader } = await import("./page");

    return {
      loader: async ({ request, params }) =>
        pokemonLoader(queryClient, {
          request,
          params,
        }),
      Component: PokemonDetailPage,
    };
  },
} satisfies BaseRouteObject;
