import { Pokemon } from './models/Pokemon.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  user = null
  /**@type {import('./models/Account.js').Account | null} */
  account = null

  /** @type {Pokemon[]} */
  pokemons = []

  /** @type {Pokemon} */
  activePokemon = null

  /** @type {Pokemon[]} */
  trainerPokemons = []
}

export const AppState = createObservableProxy(new ObservableAppState())