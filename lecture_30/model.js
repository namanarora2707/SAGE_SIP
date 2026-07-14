const mongoose=require("mongoose");
const studentschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        min:18,
        max:100
    },
    email:{
        type:String,
        required:true,
        unique:true
    }
});
const student=mongoose.model("student",studentschema);
module.exports=student;