import { extractSearchParam } from "@/lib/search-params";
import {
  PokemonFilter,
  pokemonOptions,
  PokemonResponse,
} from "@/repositories/pokemon";
import { DefaultFilter } from "@/types/service";
import { QueryClient, useQuery } from "@tanstack/react-query";
import { Suspense } from "react";
import { Await, LoaderFunctionArgs, useLoaderData } from "react-router";

export const pokemonLoader = (
  queryClient: QueryClient,
  { request, params }: LoaderFunctionArgs,
) => {
  const url = new URL(request.url);
  const filter = extractSearchParam<PokemonFilter>(url.searchParams);
  const data: Promise<PokemonResponse> = queryClient.ensureQueryData(
    pokemonOptions("detail", {
      id: params.id as string,
      params: filter,
    }),
  );
  return { data, filter, params };
};

type LoaderData = {
  data: Promise<PokemonResponse>;
  filter: DefaultFilter;
  params: { id: string };
};

export function PokemonDetailPage() {
  const { data, params } = useLoaderData() as LoaderData;

  const { data: pokemonData } = useQuery(
    pokemonOptions("detail", { id: params.id }),
  );

  return (
    <div>
      <h1>Pokemon Detail {params.id}</h1>
      <p>{JSON.stringify(data, null, 2)}</p>

      <Suspense fallback={<></>}>
        <Await
          resolve={pokemonData ?? data}
          errorElement={<p>Error fetch pokemon data!</p>}
        >
          {(data) => <p>List pokemon: {JSON.stringify(data, null, 2)}</p>}
        </Await>
      </Suspense>
    </div>
  );
}
