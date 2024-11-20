export type ListPokemon = {
  name: string;
  url: string;
}[];

export type PokemonFilter = {
  limit: string | number;
  offset: string | number;
};
