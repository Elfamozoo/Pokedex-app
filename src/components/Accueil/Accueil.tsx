import {usePokemonList} from "../../services/usePokemonList.ts";
import PokemonCard from "../PokemonCard/PokemonCard.tsx";

const Accueil = () => {
    const pokemonList = usePokemonList()
    console.log(pokemonList)
    return (
        <>
            <PokemonCard image={""} category={""} title={""} footer={""}
                         author={{image: "", name: "", description: ""}}/>
        </>
    )
}


export default Accueil
