const Pokemon = require('../models/pokemon');

module.exports = {
        //criar
    async Store(req,res){
        const {nome, peso, tipo} = req.body;
        const pokemons = await Pokemon.create({nome, peso, tipo});
        return res.json(pokemons);
        },

       //ler 
    async index(req,res){
        const pokemons = await Pokemon.findAll();
        return res.json(pokemons);
    },

       //atualizar
    async update(req, res) {
        const {nome, peso, tipo} = req.body;
        let pokemon = await Pokemon.findByPk(req.params.id)
        pokemon = await pokemon.update({nome, peso, tipo})
        return res.json(pokemon)
    },

        //deletar
    async delete(req, res) {
        const {nome, peso, tipo} = req.body;
        let pokemons = await Pokemon.findByPk(req.params.id)
        pokemons = await pokemons.destroy ({nome, peso, tipo});
        return res.json(pokemons)
    }
};