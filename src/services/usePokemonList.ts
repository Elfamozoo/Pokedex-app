import {useEffect, useState} from "react";
import {NamedAPIResource} from "pokenode-ts";
import {getPokemonList} from "./Pokeapi.ts";

export const usePokemonList = () => {
    const [pokemonList, setPokemonList] = useState<NamedAPIResource[] | undefined>([])

    useEffect(() => {
        getPokemonList(0, 50).then((data) => {
            setPokemonList(data?.results)
        })
    }, [])

    return pokemonList
};
