const express=require("express");
const connection=require('./mongo.js');
connection();
const student=require('./model.js');
async function add() {
await student.create({
    name:"Divya",
    age:20,
    email:"divya3@gmail.com"
})
};
async function update(){
    await student.updateOne({
        email:"divya3@gmail.com"
    },{
        $set:{age:40}
    })
    console.log("Student Updated")
};
async function del(){
    await student.deleteOne({
        age:40
    })
    console.log("Deleted");
};
// add();
async function show(){
const data=await student.find();
console.log(data);
};
update();
del();
setTimeout(()=>{
    show();
},5000)