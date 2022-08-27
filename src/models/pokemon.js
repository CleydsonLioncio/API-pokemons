const { Model, DataTypes } = require('sequelize');

class Pokemon extends Model {
    static init (sequelize){
        super.init({
            nome: DataTypes.STRING,
            peso: DataTypes.STRING,
            tipo: DataTypes.STRING,
         }, {
              sequelize
        })
    }
}

module.exports = Pokemon