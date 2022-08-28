const express = require('express');

const PokemonController = require ('./controllers/PokemonController');

const routes = express.Router();

     //enviar
routes.post('/pokemons',PokemonController.create);
     //obter
routes.get('/pokemons',PokemonController.index);
     //atualizar
routes.put('/pokemons/:id',PokemonController.update);
     //deletar
routes.delete('/pokemons/:id',PokemonController.delete);

module.exports = routes