let pokeMoves = {
    template: `
        <div class="respuesta__movimientos_centrado">
            <div class="movimiento__texto">
                <h3>{{ name }}</h3>
                <p>{{ flavorText }}</p>
            </div>
        </div>
    `,
    props: {
        pokeMove: {
            type: Object,
            required: false,
            default() {
                return {
                    'name': 'Movimiento no encontrado',
                    'url': 'URL no encontrada'
                }
            }
        }
    },
    data() {
        return {
            flavorText: '',
            name: '',
        }
    },
    created() {
        const urlRqst = async _ => {
            try {
                // fetch ajax al link de habilidades
                let urlMove = this.pokeMove.url;
                let res = await fetch(urlMove);
                let toJson = await res.json();
                // console.log(toJson);
                const langSP = function(json) { 
                    return json.language.name === 'es';
                }

                // busca el nombre en español
                this.name = toJson.names.find(langSP).name;
                
                // busca el flavor text en español
                this.flavorText = toJson.flavor_text_entries.find(langSP).flavor_text;
                
            } catch(err) {
                console.log(err);
            }
        };
        urlRqst();
    },
}