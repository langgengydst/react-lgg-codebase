import { extractSearchParam } from "@/lib/search-params";
import { QueryClient } from "@tanstack/react-query";
import { Suspense } from "react";
import {
  Await,
  LoaderFunctionArgs,
  useLoaderData,
  useSearchParams,
} from "react-router-dom";
import {
  PokemonFilter,
  pokemonOptions,
  PokemonResponse,
} from "@/repositories/pokemon";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
  filter: PokemonFilter;
};

export function PokemonPage() {
  const { data } = useLoaderData() as LoaderData;
  const [_, setSearchParams] = useSearchParams();

  const handleFilterChange = (
    key: keyof PokemonFilter,
    filter: string | number,
  ) => {
    setSearchParams((params) => ({
      ...params,
      [key]: filter,
    }));
  };

  return (
    <div className="flex flex-col gap-4">
      <section>
        <Select onValueChange={(val) => handleFilterChange("limit", val)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Limit" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="10">10</SelectItem>
            <SelectItem value="100">100</SelectItem>
            <SelectItem value="200">200</SelectItem>
            <SelectItem value="300">300</SelectItem>
            <SelectItem value="2000">2000</SelectItem>
          </SelectContent>
        </Select>
      </section>

      <Suspense fallback={<p>Loading pokemon data</p>}>
        <Await resolve={data} errorElement={<p>Error fetch pokemon data!</p>}>
          {(data) => <p>List pokemon: {JSON.stringify(data, null, 2)}</p>}
        </Await>
      </Suspense>
    </div>
  );
}
