import { extractSearchParam } from "@/lib/search-params";
import { QueryClient } from "@tanstack/react-query";
import { Suspense } from "react";
import {
  Await,
  LoaderFunctionArgs,
  NavLink,
  useLoaderData,
} from "react-router";
import {
  PokemonFilter,
  pokemonOptions,
  PokemonResponse,
} from "@/repositories/pokemon";
import { Filter } from "./fragment/filter";
import { DefaultFilter } from "@/types/service";

export const pokemonLoader = (
  queryClient: QueryClient,
  { request }: Pick<LoaderFunctionArgs, "request">,
) => {
  const url = new URL(request.url);
  const filter = extractSearchParam<PokemonFilter>(url.searchParams);
  const data: Promise<PokemonResponse> = queryClient.ensureQueryData(
    pokemonOptions("list", {
      params: filter,
    }),
  );
  return { data, filter };
};

type LoaderData = {
  data: Promise<PokemonResponse>;
  filter: DefaultFilter;
};

export function PokemonPage() {
  const { data } = useLoaderData() as LoaderData;

  const dummyData = Array.from({ length: 100 }, () => ({}));

  return (
    <div className="flex flex-col gap-4">
      <Filter />

      <div className="flex gap-2 flex-wrap">
        {dummyData.map((_, i) => (
          <NavLink
            to={`${i}`}
            className="p-4 rounded-md bg-pink-200 hover:cursor-pointer w-28 "
          >
            <p key={i}>Data {i}</p>
          </NavLink>
        ))}
      </div>

      <Suspense fallback={<p>Loading pokemon data</p>}>
        <Await resolve={data} errorElement={<p>Error fetch pokemon data!</p>}>
          {(data) => <p>List pokemon: {JSON.stringify(data, null, 2)}</p>}
        </Await>
      </Suspense>
    </div>
  );
}
