const express=require("express");
const sequelize=require('./config/db.js');
const student=require('./model/model.js');
const connection=require('./connection/connection.js');
async function start(){
    await connection();
    await sequelize.sync();
    await student.create({
        name:"Divya",
        age:25
    });
    await student.update(
        {age:90},{where:{id:3}});
    await student.destroy({
        where:{id:1}
    })
    const data= await student.findAll();
    console.log(data);
}
start();