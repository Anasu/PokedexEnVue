let pokeImage = {
    template: `
        <img :src="'https://www.serebii.net/art/th/' + pokeImgUrl + '.png'" 
            alt="Pokemon Image" >
    `,
    props: {
        pokeImgUrl: {
            type: Number,
            required: false,
            default() {
                return 
            }
        }
    }
}