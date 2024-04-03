function FormatType(types) {
    let typeString = ''
    types.forEach(type => typeString += (type.type.name + ' '))
    return typeString
}


export class Pokemon {
    constructor(data) {
        this.name = data.name
        this.types = data.types
        this.weight = data.weight
        // @ts-ignore
        this.img = data.img ? data.img : data.sprites.versions['generation-i']['red-blue'].front_default
        this.id = data.id
    }

    get ActivePokemonTemplate() {
        return `
        <div class="card">
                <div class="card-title border border-3 border-danger">
                    <h3 class="p-3">${this.name}</h3>
                </div>
                <img class="card-img p-5" src="${this.img}" alt="">
                <div class="card-body">
                    <div class="card-text border border-3 border-danger">
                        <div class="p-2">Type: ${this.TypesFormating}</div>
                        <div class="p-2">Stats: Weight-${this.weight}</div>
                        <div class="text-end">
                            <button onclick="app.sbPokemonsController.CatchPokemon()" class="m-2">Catch<i class="mdi mdi-pokeball"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        `
    }

    get TypesFormating() {
        let typingText = ''
        this.types.forEach(type => typingText += (type.type.name + ' '))
        return typingText
    }

    get trainerPokemonTemplate() {
        return `
        <div class="py-1">
            <button onclick="app.sbPokemonsController.SetActiveTrainerPokemon('${this.name}')"  class="border border-5 border-danger">${this.name} 
                    <button onclick="app.sbPokemonsController.DeletePokemon('${this.id}')">X</button>
                </button>
            </div>
        `
    }



    static pokemonListTemplate(pokeName) {
        return `
        <div class="py-1">
                <button onclick="app.PokemonsController.GetPokemonByName('${pokeName}')" class="border border-5 border-danger"><i class="mdi mdi-pokeball"></i> ${pokeName}</button>
            </div>
        `
    }
}