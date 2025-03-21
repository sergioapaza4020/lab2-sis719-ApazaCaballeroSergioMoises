import { fetchFromApi } from './api';

export interface PokemonSprites {
    [key: string]: string | null;
}

export interface PokemonAbility {
    name: string;
    url: string;
}

export interface PokemonAbilities {
    ability: PokemonAbility;
}

export interface PokemonType {
    name: string;
    url: string;
}

export interface PokemonTypes {
    type: PokemonType;
}

export interface PokemonResponse {
    id: number;
    name: string;
    sprites: PokemonSprites;
    abilities: PokemonAbilities[];
    types: PokemonTypes[];
    weight: number;
}

export function fetchPokemon(nameOrId: string) {
    return fetchFromApi<PokemonResponse>('pokemon', nameOrId);
}