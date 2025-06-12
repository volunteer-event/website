var mongoose = require('mongoose');
mongoose
    .connect(
        "mongodb+srv://annamarymartin652:volevent@cluster0.g7rxwao.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(()=>{
        console.log("db connected")
    })
    .catch(()=>{
        console.log(err)
    })
