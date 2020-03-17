let pokemon = {
    template: `
        <div class="respuesta__contenido">
            <poke-image></poke-image>
            <poke-data></poke-data>
            <poke-moves></poke-moves>
            <poke-abilities></poke-abilities>
        </div>
    `, 
    components: {
        pokeImage,
        pokeData,
        pokeAbilities,
        pokeMoves
    },
    props: [
        {
            
        }
    ]

}