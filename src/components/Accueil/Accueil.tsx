import {usePokemonList} from "../../services/usePokemonList.ts";
import PokemonCard from "../PokemonCard/PokemonCard.tsx";


const Accueil = () => {
    const pokemonList = usePokemonList()
    return (
        <>
            {pokemonList?.map((pokemon) => {
                return (
                    <PokemonCard
                        key={pokemon.name}
                        pokemonName={pokemon.name}
                    />
                )
            })}
        </>
    )
}


export default Accueil
