Vue.component('poke-display', {
    template: `
        <div>
            <div class="consulta__contenido">
                <h1 class="consulta__titulo">Pokedex Nacional</h1>
                <p class="consulta__instrucciones">
                    Ingresa el nombre o el número de un pokemon para consultar.
                </p>
                <div class="consulta__formulario">
                    <input type="text" class="formulario__info" v-model="pokeInput" >
                    <button id="pokeSubmit" class="formulario__boton" @click="pokeRqst()">Consultar</button>
                </div>
            </div>
            <pokemon :objRqstd="pokeObj"></pokemon>
        </div>
    `,
    data() {
        return {
            pokeInput: '',
            pokeObj: {}
        }
    },
    methods: {
        pokeRqst: function() {
            const pagRqst = async _ => {
                this.pokeObj = {};
                try {
                    let urlApi = `https://pokeapi.co/api/v2/pokemon/${this.pokeInput}`;
                    let res = await fetch(urlApi);
                    let toJson = await res.json();
                    this.pokeObj = toJson;
                } catch(err) {
                    console.log(err);
                }
            };
            pagRqst();
        }
    },
    components: {
        pokemon,
    }
});