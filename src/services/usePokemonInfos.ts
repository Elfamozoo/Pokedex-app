import {useEffect, useState} from "react";
import {getPokemonInfos} from "./Pokeapi.ts";
import {Pokemon} from "pokenode-ts";


export const usePokemonInfos = () => {
    const [pokemonInfos, setPokemonInfos] = useState<Pokemon | undefined>(undefined)
    const [pokemonName, setPokemonName] = useState("")

    useEffect(() => {
        getPokemonInfos(pokemonName).then((pokemon) => {
            setPokemonInfos(pokemon)
        })
    }, [])
    console.log(pokemonInfos)
};