const express=require("express");
const app=express();
const multer=require("multer");
const upload=multer({
    dest:"uploads/"
});
app.use(express.static("public"));
app.post('/uploads',upload.single("image"),(req,res)=>{
    res.send("uploaded");
    console.log(req.file);
});
app.listen(3000);


