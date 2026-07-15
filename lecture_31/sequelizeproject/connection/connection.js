const sequelize=require('../config/db.js');
function connection(){
    sequelize.authenticate().then(()=>{
        console.log("connected ho gaya");
    }).catch((err)=>console.log(err));
}

module.exports=connection;