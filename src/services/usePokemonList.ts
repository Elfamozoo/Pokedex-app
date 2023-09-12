import {useEffect, useState} from "react";
import {NamedAPIResourceList} from "pokenode-ts";
import {getPokemonList} from "./Pokeapi.ts";


export const usePokemonList = () => {
        const [pokemonList, setPokemonList] = useState<NamedAPIResourceList["results"] | undefined>([])
        const [offset, setOffset] = useState<number>(0)
        const [count, setCount] = useState<NamedAPIResourceList["count"] | undefined>(0)

        useEffect(() => {
            getPokemonList(offset, 50).then((data) => {
                setPokemonList(data?.results)
                setCount(data?.count)
            })
        }, [offset])

        const goNext = () => {
            if (count && offset >= count)
                return;
            setOffset(offset + 50)
        }

        const goPrevious = () => {
            if (offset === 0) {
                return;
            }
            setOffset(offset - 50)
        }
        console.log(pokemonList)

        return {
            pokemonList,
            goNext,
            goPrevious,
        }
    }
;
