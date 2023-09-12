import {usePokemonList} from "../../services/usePokemonList.ts";
import PokemonCard from "../PokemonCard/PokemonCard.tsx";
import Pagination from "../Pagination/Pagination.tsx";
import {Flex} from '@mantine/core'

const Accueil = () => {
    const {pokemonList,goNext,goPrevious} = usePokemonList()
    return (
        <>
            <Flex>
                {pokemonList?.map((pokemon) => {
                    return (
                        <PokemonCard
                            key={pokemon.name}
                            pokemonName={pokemon.name}
                        />


                    )
                })}
            </Flex>
            <Pagination goNext={goNext} goPrevious={goPrevious}/>

        </>

    )
}


export default Accueil
