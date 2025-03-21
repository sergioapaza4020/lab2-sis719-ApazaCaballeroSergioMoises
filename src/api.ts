const BASE_URL = "https://pokeapi.co/api/v2/";

export async function fetchFromApi<T>(resource: string, identifier: string): Promise<T> {
    const url = `${BASE_URL}${resource}/${identifier.toLowerCase()}`;
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`No se pudo obtener ${resource} con identificador "${identifier}"`);
    }

    return await response.json() as T;
}