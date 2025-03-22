const STORAGE_KEY = "pokemonHistory";

export function getHistory(): string[] {
    const history = localStorage.getItem(STORAGE_KEY);
    return history ? JSON.parse(history) : [];
}

export function clearHistory() {
    localStorage.removeItem(STORAGE_KEY);
}

export function addToHistory(pokemonName: string) {
    let history = getHistory();
    history = history.filter(name => name.toLowerCase() !== pokemonName.toLowerCase());
    history.unshift(pokemonName);

    if (history.length > 15) {
        history.pop();
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
}