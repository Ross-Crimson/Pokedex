//sandbox service

import { AppState } from "../AppState.js";
import { pokeApi } from "./PokemonsService.js";
import { api } from "./AxiosService.js"
import { Pokemon } from "../models/Pokemon.js";


class sbPokemonsService {
    async GetTrainerPokemon() {
        const response = await api.get('/api/pokemon')

        AppState.trainerPokemons = response.data.map(pokemon => new Pokemon(pokemon))
        console.log(AppState.trainerPokemons)
    }

    async CatchPokemon() {
        const response = await api.post('/api/pokemon', AppState.activePokemon)
        //console.log(response.data)
        const pokemon = new Pokemon(response.data)
        AppState.trainerPokemons.push(pokemon)
    }

    SetActiveTrainerPokemon(pokeName) {
        AppState.activePokemon = AppState.trainerPokemons.find(pokemon => pokemon.name == pokeName)
    }

    async DeletePokemon(pokeId) {
        console.log("trying to delete")
        const response = await api.delete(`/api/pokemon/${pokeId}`)
        const pokeToDeleteIndex = AppState.trainerPokemons.findIndex(pokemon => pokemon.id == pokeId)
        AppState.trainerPokemons.splice(pokeToDeleteIndex, 1)
    }
}

export const sb_pokemonsService = new sbPokemonsService