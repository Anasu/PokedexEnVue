let pokemon = {
    template: `
        <div class="respuesta">
            <div class="respuesta__titulo">
                <poke-image :pokeImgUrl="objRqstd.id"></poke-image>
                <poke-data :pokeName="pokemonName" :pokeID="pokemonID"></poke-data>
            </div>
            <div class="respuesta__habilidades">
                <h2>Habilidades:</h2>
                <poke-abilities 
                    v-for="ability in abilities"
                    :pokeAbility="ability.ability"
                    :key="ability.name">
                </poke-abilities>
            </div>
            <poke-moves></poke-moves>
        </div>
    `, 
    data() {
        return {
            abilities: [],
            pokemonName: '',
            pokemonID: 0,
        }
    },
    components: {
        pokeImage,
        pokeData,
        pokeAbilities,
        pokeMoves
    },
    props: {
        objRqstd: {
            type: Object,
            required: false,
            default() {
                return {};
            }
        }
    }, 
    updated() {
        this.abilities = this.objRqstd.abilities;
        this.pokemonName = this.objRqstd.name;
        this.pokemonID = this.objRqstd.id;
    }
}