
const mongoose = require('mongoose');
mongoose.connect(
    "mongodb://localhost:27017/nodeApi",
    {useNewUrlParser:true,useUnifiedTopology:true},
    (err)=>{
        (!err) ? console.log("Mongodb a ete connecté avec succès") : console.log(err)
    }
)