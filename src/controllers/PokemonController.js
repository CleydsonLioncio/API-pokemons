const Pokemon = require('../models/pokemon');

module.exports = {
        //criar
    async Store(req,res){
        const {nome, peso, tipo} = req.body;
        const pokemon = await Pokemon.create({nome, peso, tipo});

        return res.json(pokemon);
    },
       //ler 
    async index(req,res){
        const pokemons = await Pokemon.findAll();
        return res.json(pokemons);
    },
       //atualizar
    async update(req, res) {
        const {nome, peso, tipo} = req.body;
        const pokemon = await Pokemon.findByPk(6)
        //pokemon = await Pokemon.update({nome, peso, tipo})
        Pokemon.update({nome, peso, tipo})
        return res.json(pokemon)
    },
        //deletar
    async delete(req, res) {
        const {nome, peso, tipo} = req.body;
        let pokemons = await Pokemon.findByPk(req.params.id)
        pokemons.destroy ({nome, peso, tipo});
      
        return res.json(pokemons)
    }

    // async delete(req, res) {
    //     const pokemons = await Pokemon.findByPk(7)
    //     pokemons.destroy ();
      
    //     return res.json(pokemons)
    // }
   
};