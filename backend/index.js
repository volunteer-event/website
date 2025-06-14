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
        await new profiles(req.body).save();
        res.send("Data added");
    } catch (error) {
        res.send("error");
    }
});



app.post('/login', async (req, res) => {
  const { Email, Password } = req.body;

  try {
    const user = await profiles.findOne({ Email });
    if (!user) {
      return res.status(401).send("User not found");
    }
    if (user.Password !== Password) {
      return res.status(401).send("Incorrect password");
    }

    res.send({ message: "Login successful", userId: user._id });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

app.post( '/reg',async(req,res) => {
    try {
        await new events(req.body).save();
        res.send("Data added")
    } catch (error) {
        res.send("error");
    }
});


app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})