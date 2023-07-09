import {PokemonType} from "./PokemonType";

export interface Pokemon{
  id: number,
  name: string,
  url: string,
  sprite: string,
  types: PokemonType[]
}
