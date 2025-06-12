var express = require('express')
var app = express();
require("./db");
var profiles=require("./model/people");
app.use(express.json());

var port=3000;



app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})