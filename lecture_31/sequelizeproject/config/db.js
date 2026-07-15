const {Sequelize}=require("sequelize");
const sequelize=new Sequelize(
    "sage",
    "root",
    "Namanarora@123",
    {
        host:"localhost",
        dialect:"mysql"
    }
);

module.exports=sequelize;
