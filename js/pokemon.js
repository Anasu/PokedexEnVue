let pokemon = {
    template: `
        <div class="respuesta">
            <div class="respuesta__titulo">
                <poke-image :pokeImgUrl="objRqstd.id"></poke-image>
                <poke-data :pokeName="objRqstd.name" :pokeID="objRqstd.id"></poke-data>
            </div>
            <poke-abilities 
                v-for="ability in objRqstd.abilities"
                :pokeAbility="ability.ability"
                :key="objRqstd.abilities.name">
                </poke-abilities>
            <poke-moves></poke-moves>
        </div>
    `, 
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

}