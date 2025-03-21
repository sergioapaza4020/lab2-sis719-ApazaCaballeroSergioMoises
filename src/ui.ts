import { PokemonResponse } from './pokemon';

export function renderPokemon(pokemon: PokemonResponse): void {
    const resultDiv = document.getElementById('result')!;
    resultDiv.innerHTML = `
    <h2>${pokemon.name.toUpperCase()}</h2>
    <p>ID: ${pokemon.id}</p>
    <p>WEIGHT: ${pokemon.weight}</p>
    <p>ABILITIES:</p>
    ${Object.entries(pokemon.abilities)
        .map(([_, {ability}]) => `<p>${ability.name} and ${ability.url}</p>`)
    }
    <div>
        ${Object.entries(pokemon.sprites)
            .filter(([_, value]) => typeof value === "string" && value !== null)
            .map(([key, value]) => `<img src="${value}" alt="${key}" title="${key}" />`)
            .join('')}
    </div>
    `;
}