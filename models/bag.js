/* var Sequelize = require('sequelize')
 */
module.exports = function(sequelize, DataTypes){
    var bag = sequelize.define('bag',{
        name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        model:{
            type: DataTypes.STRING,
            allowNull: true
        },
        quantity:{
            type:DataTypes.INTEGER,
            allowNull: true
        },
        price:{
            type:DataTypes.FLOAT,
            allowNull: true,
            defaultValue: 0.0
        },
        color:{
            type:DataTypes.STRING
        },
        material:{
            type:DataTypes.STRING
        },
        SKU:{
            type:DataTypes.STRING,
            allowNull: true
        }, 
        image:{
            type:DataTypes.STRING,
            allowNull: true
        }, 
        description:{
            type:DataTypes.STRING,
            allowNull: true
        } ,
        sold:{
            type:DataTypes.BOOLEAN,
            allowNull: false
        }

    })

   
    return bag;
    //return user;
    //bag.sync()

}