import { queryOptions } from "@tanstack/react-query";
import {
  RequestConfig,
  ServiceQueryArgs,
  ServiceQueryFn,
} from "@/types/service";
import { BasicApi } from "@/lib/services";
import env from "@/lib/env";
import { PokemonFilter } from "./model";

const api = new BasicApi(env.BLAST_BASE_URL);

const pokemonService = {
  list: async (config: RequestConfig<PokemonFilter>) =>
    api.get("/pokemon", config),
};

type ServiceType = typeof pokemonService;

export function pokemonOptions<T extends keyof ServiceType>(
  serviceKey: T,
  queryFnArgs?: ServiceQueryArgs<T, ServiceType>,
) {
  const queryFn: ServiceQueryFn = pokemonService[serviceKey];

  return queryOptions({
    queryKey: ["pokemon", serviceKey, queryFnArgs],
    queryFn: () => queryFn(queryFnArgs),
    staleTime: 5 * 1000,
  });
}
