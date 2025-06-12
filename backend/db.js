var mongoose = require('mongoose');
mongoose
    .connect(
        "mongodb+srv://nargeesameena:nammadeproj@cluster0.ea0hupc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(()=>{
        console.log("db connected")
    })
    .catch(()=>{
        console.log(err)
    })
