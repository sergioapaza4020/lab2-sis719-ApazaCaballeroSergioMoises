import { clearHistory, getHistory } from './history';
import { PokemonResponse } from './pokemon';

export function renderPokemon(pokemon: PokemonResponse): void {
    const resultDiv = document.getElementById('result')!;
    resultDiv.innerHTML = `
    <h2>${pokemon.name.toUpperCase()}</h2>
    <p><strong>ID:</strong> ${pokemon.id}</p>
    <p><strong>WEIGHT:</strong> ${pokemon.weight}</p>
    <p><strong>ABILITIES:</strong></p>
    ${Object.entries(pokemon.abilities)
            .map(([_, { ability }]) => `<p>${ability.name}</p>`)
            .join('')
        }
    <p><strong>TYPES:</strong></p>
    ${Object.entries(pokemon.types)
            .map(([_, { type }]) => `<p>${type.name}</p>`)
            .join('')
        }
    <div>
    ${Object.entries(pokemon.sprites)
            .filter(([_, value]) => typeof value === "string" && value !== null)
            .map(([key, value]) => `<img src="${value}" alt="${key}" title="${key}" />`)
            .join('')
        }
    </div>
    `;
}

export function renderHistory(container: HTMLElement, onClick: (name: string) => void) {
    const history = getHistory();
    container.innerHTML = history.length
        ? history.map(name => `<button class="history-item">${name}</button>`).join("")
        : "<p>No hay búsquedas recientes</p>";

    if (history.length > 0) {
        const clearButton = document.createElement("button");
        clearButton.textContent = "🗑 Vaciar Historial";
        clearButton.className = "clear-history";
        clearButton.addEventListener("click", () => {
            clearHistory();
            renderHistory(container, onClick);
        });
        container.appendChild(clearButton);
    }

    container.querySelectorAll(".history-item").forEach(button => {
        button.addEventListener("click", () => onClick(button.textContent || ""));
    });
}
