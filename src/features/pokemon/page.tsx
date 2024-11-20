import { extractSearchParam } from "@/lib/search-params";
import { QueryClient } from "@tanstack/react-query";
import { Suspense } from "react";
import { Await, LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import {
  ListPokemon,
  PokemonFilter,
  pokemonOptions,
} from "@/repositories/pokemon";

export const pokemonLoader = (
  queryClient: QueryClient,
  { request }: Pick<LoaderFunctionArgs, "request">,
) => {
  const url = new URL(request.url);
  const filter = extractSearchParam<ListPokemon>(url.searchParams);
  const data: Promise<ListPokemon> = queryClient.ensureQueryData(
    pokemonOptions("list", { limit: 2000, offset: 0 }),
  );
  return { data, filter };
};

type LoaderData = {
  data: ListPokemon;
  filter: PokemonFilter;
};

export function PokemonPage() {
  const { data } = useLoaderData() as LoaderData;

  return (
    <div>
      <Suspense fallback={<p>Loading pokemon data</p>}>
        <Await
          resolve={data}
          errorElement={<p>Error loading package location!</p>}
        >
          {(data) => <p>List pokemon: {JSON.stringify(data, null, 2)}</p>}
        </Await>
      </Suspense>
    </div>
  );
}
