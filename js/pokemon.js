let pokemon = {
    template: `
        <div class="respuesta__contenido">
            <poke-image></poke-image>
            <!-- Num + nombre -->
            <poke-moves></poke-moves>
            <poke-abilities></poke-abilities>
        </div>
    `, 
    components: {
        pokeImage,
        pokeAbilities,
        pokeMoves
    }

}