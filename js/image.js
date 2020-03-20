let pokeImage = {
    template: `
        <img :src="imageURL" 
            alt="Pokemon Image" :id="pokeImgUrl">
    `,
    props: {
        pokeImgUrl: {
            type: Number,
            required: false,
            default() {
                return 0
            }
        }
    },
    data (){
        return {
            imageURL: 'img/not-found.png',
        }
    },
    updated() {
        const imgRqst = async _ => {
            try {
                // fetch ajax al link de habilidades
                let urlAbility = 'https://www.serebii.net/art/th/' + this.pokeImgUrl + '.png';
                let res = await fetch('https://corsanywhere.herokuapp.com/' + urlAbility);
                
                if(res.status == 200){
                    this.imageURL = urlAbility;
                } else {
                    this.imageURL = 'img/not-found.png';
                }
                
                console.log(this.imageURL)
            } catch(err) {
                this.imageURL = 'img/not-found.png';
            }
        };
        imgRqst();
    }
}