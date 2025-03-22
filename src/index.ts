import { addToHistory } from './history';
import { fetchPokemon } from './pokemon';
import { renderHistory, renderPokemon } from './ui';

const input = document.getElementById('searchInput') as HTMLInputElement;
const button = document.getElementById('searchBtn') as HTMLButtonElement;
const resultDiv = document.getElementById('result')!;
const backBtn = document.getElementById('backBtn') as HTMLButtonElement;
const nextBtn = document.getElementById('nextBtn') as HTMLButtonElement;
const btnContainer = document.getElementById('btnContainer')!;
const historyContainer = document.getElementById('history')!;

let currentPokemon: any = null;

const updateButtonsVisibility = () => {
    if (!currentPokemon) return;

    backBtn.style.display = currentPokemon.id === 1 ? "none" : "inline-block";
    nextBtn.style.display = currentPokemon.id === 1025 ? "none" : "inline-block";
};


const searchPokemon = async (name: string, isSearch?: boolean) => {
    if (!name) return;

    resultDiv.innerHTML = "🔄 Buscando...";

    try {
        const pokemon = await fetchPokemon(name);
        currentPokemon = pokemon;

        renderPokemon(pokemon);
        updateButtonsVisibility();
        if (isSearch) {
            addToHistory(pokemon.name);
            renderHistory(historyContainer, searchPokemon);
        }
    } catch (error) {
        console.error(error);
        resultDiv.innerHTML = `<p style="color:red;">${(error as Error).message}</p>`;
    }
};

button.addEventListener('click', () => {
    searchPokemon(input.value.trim(), true)
});

backBtn.addEventListener('click', () => {
    if (!currentPokemon || currentPokemon.id <= 1) return;
    searchPokemon((currentPokemon.id - 1).toString());
});

nextBtn.addEventListener('click', () => {
    if (!currentPokemon || currentPokemon.id >= 1025) return;
    searchPokemon((currentPokemon.id + 1).toString());
});

renderHistory(historyContainer, searchPokemon);