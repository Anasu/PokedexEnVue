Vue.component('poke-display', {
    template: `
        <div>
            <div class="consulta__contenido">
                <h1 class="consulta__titulo">Pokedex Nacional</h1>
                <p class="consulta__instrucciones">
                    Ingresa el nombre o el número de un pokemon para consultar.
                </p>
                <div class="consulta__formulario">
                    <input type="text" id="pokeInput" class="formulario__info">
                    <button id="pokeSubmit" class="formulario__boton">Consultar</button>
                </div>
            </div>
            <pokemon></pokemon>
        </div>
    `,
    data() {
        return {

        }
    },
    methods: {
        pokeRqst: function() {
            const pagRqst = async _ => {
                let urlApi = 'https://pokeapi.co/api/v2/pokemon';
                let res = await fetch(urlApi);
                let toJson = await res.json();
    
                this.charList = toJson.results;
            };
            pagRqst();
        }
    },
    components: {
        pokemon,
    }
});