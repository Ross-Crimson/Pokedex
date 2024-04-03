function FormatType(types) {
    let typeString = ''
    types.forEach(type => typeString += (type.type.name + ' '))
    return typeString
}


export class Pokemon {
    constructor(data) {
        this.name = data.name
        this.type = FormatType(data.types)
        this.weight = data.weight
    }

    get ActivePokemonTemplate() {
        return `
        <div class="card">
                <div class="card-title border border-3 border-danger">
                    <h3 class="p-3">${this.name}</h3>
                </div>
                <img class="card-img" src="https://img.pokemondb.net/artwork/large/sneasel.jpg" alt="">
                <div class="card-body">
                    <div class="card-text border border-3 border-danger">
                        <div class="p-2">Type: ${this.type}</div>
                        <div class="p-2">Stats: Weight-${this.weight}</div>
                        <div class="text-end">
                            <button class="m-2">Catch<i class="mdi mdi-pokeball"></i></button>
                        </div>
                    </div>
                </div>
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