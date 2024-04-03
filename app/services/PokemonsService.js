import { AppState } from "../AppState.js"
import { Pokemon } from "../models/Pokemon.js"

// @ts-ignore
export const pokeApi = new axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon',
    timeout: 8000
})


class PokemonsService {

    async GetPokemons() {
        const response = await pokeApi.get('/?limit=151')

        AppState.pokemons = response.data.results
        //console.log(AppState.pokemons)
    }

    async GetPokemonByName(pokeName) {
        const response = await pokeApi.get(`/${pokeName}`)
        const newPoke = new Pokemon(response.data)
        AppState.activePokemon = newPoke
        console.log(AppState.activePokemon)
    }
}

export const pokemonsService = new PokemonsService