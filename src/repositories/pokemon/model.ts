import { AxiosResponse } from "axios";

export type ListPokemon = {
  name: string;
  url: string;
}[];

export type PokemonFilter = {
  limit: string | number;
  offset: string | number;
};

export type PokemonResponse = {
  count: number;
  next: string;
  previous: null;
  results: ListPokemon;
  axiosDataResponse: AxiosResponse;
};
