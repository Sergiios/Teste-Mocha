const assert = require('assert')
const {obterPokemon} = require('./service')

describe('Poke Tests', () => {
    it('Deve buscar o Charmander com o formato correto', async () => {
        const expected = {name: 'charmander', weight: 85, height : 6};
        const name = 'charmander'
        const resultado = await obterPokemon(name)
        assert.deepEqual(JSON.parse(resultado), expected)
    })
})