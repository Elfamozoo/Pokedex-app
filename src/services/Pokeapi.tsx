import {NamedAPIResourceList, Pokemon, PokemonClient} from 'pokenode-ts'

export const getPokemonList = async (
    offset?: number,
    limit?: number
): Promise<NamedAPIResourceList | undefined> => {
    const api = new PokemonClient()

    try {
        const data = await api.listPokemons(offset, limit)
        if (data) return data
    } catch (err) {
        console.error(err)
    }
}

export const getPokemonDetails = async (
    pokemonName: string
): Promise<Pokemon | undefined> => {
    if (!pokemonName) return
    const api = new PokemonClient()

    try {
        const data = await api.getPokemonByName(pokemonName)
        if (data) return data
    } catch (err) {
        console.error(err)
    }
}