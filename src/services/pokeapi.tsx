import { PokemonClient } from 'pokenode-ts';

(async () => {
    const api = new PokemonClient();

    await api
        .getPokemonByName('luxray')
        .then((data) => console.log(data.name)) // will output "Luxray"
        .catch((error) => console.error(error));
})();