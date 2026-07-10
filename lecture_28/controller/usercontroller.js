let student=[{
    id:1,
    name:"Naman",
    age:25
}]
exports.getuser=(req,res)=>{
    res.json(student);
}
exports.getprofile=(req,res)=>{
    res.send("All profile");
}
exports.getsettings=(req,res)=>{
    res.send("All Settings");
}