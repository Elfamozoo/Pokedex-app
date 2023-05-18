import {useEffect, useState} from "react";
import {getPokemonInfos} from "./Pokeapi.ts";
import {Pokemon} from "pokenode-ts";

export const usePokemonInfos = (initialPokemonName: string) => {
    const [pokemonInfos, setPokemonInfos] = useState<Pokemon | undefined>(undefined);
    const [pokemonName] = useState(initialPokemonName);

    useEffect(() => {
        getPokemonInfos(pokemonName).then((pokemon) => {
            setPokemonInfos(pokemon);
        });
    }, [pokemonName]);

    return pokemonInfos;
};