import {useState, useEffect} from "react";
import {getPokemonList, getPokemonDetails} from "../../services/Pokeapi.tsx";

const Accueil = async () => {
    <>
        <h1>Accueil</h1>
        <p>Voici la liste des pokemons</p>
        <ul>
            <li>bulbasaur</li>
            <li>ivysaur</li>
            <li>venusaur</li>
        </ul>
    </>
}


export default Accueil