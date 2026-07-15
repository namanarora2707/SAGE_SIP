const mongoose=require("mongoose");
const connect=async()=>{
    try{
        await mongoose.connect(process.env.mongourl)
        console.log("connection ho gaya")
    }
    catch(err){
        console.log(err);
    }
}
module.exports=connect;