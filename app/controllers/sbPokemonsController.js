//The SandBox

import { AppState } from "../AppState.js";
import { sb_pokemonsService } from "../services/sbPokemonsService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class sbPokemonsController {
    constructor() {
        AppState.on('account', this.GetTrainerPokemon)
        AppState.on('trainerPokemons', this.DrawTrainerPokemon)
    }

    async GetTrainerPokemon() {
        try {
            await sb_pokemonsService.GetTrainerPokemon()
        }
        catch (error) {
            console.log(error, "couldn't get trainer pokes")
            Pop.toast(error + "couldn't get your pokes", "error")
        }
    }

    async CatchPokemon() {
        console.log("attempted catch")
        try {
            await sb_pokemonsService.CatchPokemon()
        }
        catch (error) {
            console.log(error, "couldn't catch pokemon")
            Pop.toast(error + " couldn't catch pokemon", "error")
        }
    }

    SetActiveTrainerPokemon(pokeName) {
        sb_pokemonsService.SetActiveTrainerPokemon(pokeName)
    }

    DrawTrainerPokemon() {
        let trainerPokeHTML = ''
        AppState.trainerPokemons.forEach(pokemon => trainerPokeHTML += pokemon.trainerPokemonTemplate)
        setHTML('trainer-pokemon', trainerPokeHTML)
    }

    async DeletePokemon(pokeId) {
        event.stopPropagation()
        await sb_pokemonsService.DeletePokemon(pokeId)
    }
}