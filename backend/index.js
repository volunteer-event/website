var express = require('express')
var app = express();
require("./db");
var profiles = require("./model/people");
var events = require("./model/event");
app.use(express.json());
var cors = require('cors');
app.use(cors());
var port=3000;

app.post( '/',async(req,res) => {
    try {
        await profiles(req.body).save();
        res.send("Data added");
    } catch (error) {
        res.send("error");
    }
});

app.post( '/reg',async(req,res) => {
    try {
        await events(req.body).save();
        res.send("Data added")
    } catch (error) {
        res.send("error");
    }
});


app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})