import { AppState } from "../AppState.js"
import { pokemonsService } from "../services/PokemonsService.js"
import { Pokemon } from "../models/Pokemon.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"



export class PokemonsController {
    constructor() {
        AppState.on('pokemons', this.DrawPokemons)
        AppState.on('activePokemon', this.DrawActivePokemon)
        this.GetPokemons()
    }

    async GetPokemons() {
        try {
            await pokemonsService.GetPokemons()
        }
        catch (error) {
            console.log(error, "couldn't get the pokemon")
            Pop.toast(error + " couldn't get the pokemon", "error")
        }
    }

    async GetPokemonByName(pokeName) {
        console.log(pokeName)
        try {
            await pokemonsService.GetPokemonByName(pokeName)
        }
        catch (error) {
            console.log(error, "couldn't find pokemon")
            Pop.toast(error + " couldn't find that pokemon")
        }
    }

    DrawPokemons() {
        let pokeHTML = ''
        AppState.pokemons.forEach(pokemon => pokeHTML += Pokemon.pokemonListTemplate(pokemon.name))
        //console.log(AppState.pokemons)
        setHTML('pokemon-list-view', pokeHTML)
    }

    DrawActivePokemon() {
        setHTML('active-pokemon', AppState.activePokemon.ActivePokemonTemplate)
    }
}