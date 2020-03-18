let pokeAbilities = {
    template: `
        <div class="respuesta__habilidades_centrado">
            <!-- usar un v-for -->
            <div class="habilidad__texto">
                <h3>{{ pokeAbility.name }}</h3>
                <p>{{ pokeAbility.url }}</p>
            </div>
        </div>
    `,
    props: {
        pokeAbility: {
            type: Object,
            required: false,
            default() {
                return {
                    'name': 'Habilidad no encontrada',
                    'url': 'URL no encontrada'
                }
            }
        }
    },

}