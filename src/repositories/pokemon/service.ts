import { queryOptions } from "@tanstack/react-query";
import { PokemonFilter } from "./model";
import { ServiceQueryArgs, ServiceQueryFn } from "@/types/service";
import { BasicApi } from "@/lib/services";

const api = new BasicApi("https://pokeapi.co/api/v2");

const pokemonService = {
  list: async (filter: PokemonFilter) =>
    api.get("/pokemon", {
      params: filter,
    }),
};

type ServiceType = typeof pokemonService;

export function pokemonOptions<T extends keyof ServiceType>(
  serviceKey: T,
  queryFnArgs: ServiceQueryArgs<T, ServiceType>,
) {
  const queryFn: ServiceQueryFn = pokemonService[serviceKey];

  return queryOptions({
    queryKey: ["pokemon", serviceKey],
    queryFn: () => queryFn(queryFnArgs),
    staleTime: 5 * 1000,
  });
}
