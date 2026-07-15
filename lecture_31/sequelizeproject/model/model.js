const sequelize=require('../config/db.js');
const {DataTypes}=require("sequelize");
const student=sequelize.define("students",{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    age:{
        type:DataTypes.INTEGER
    }
});

module.exports=student;