const axios = require('axios')
const URL = 'https://pokeapi.co/api/v2/pokemon/'

const obterPokemon = async (nome) => {
    const url = `${URL}${nome}`
    try{
        const result = await axios.get(url)
        return JSON.stringify({
            name: result.data.name,
            weight: result.data.weight,
            height: result.data.height
        })
    }
    catch(err){
        console.log('Erro:', err)
    }
}

module.exports = {
    obterPokemon
}