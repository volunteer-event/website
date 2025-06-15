var express = require('express')
var app = express();
app.use(express.json());

require("./db");
var profiles = require("./model/people");
var events = require("./model/event");
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

app.get('/events', async (req, res) => {
  try {
    const data = await events.find();
    res.json(data);
  } catch (error) {
    res.status(500).send("Error fetching events");
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

app.post('/api/events/:eventId', async (req, res) => {
  const { eventId } = req.params;

  

  try {
    const event = await events.findById(eventId);
    if (!event) return res.status(404).send("Event not found");

    const volunteerData = {
  FullName: req.body.FullName,
  Email: req.body.Email,
  PhoneNumber: req.body.PhoneNumber,
  Age: req.body.Age,
  EducationQualification: req.body.EducationQualification,
  Cause: req.body.Cause,
  Roles: req.body.Roles,
  AptForRole: req.body.AptForRole,
  Skills: req.body.Skills,
  PriorExperience: Boolean(req.body.PriorExperience),
  BriefExperience: req.body.BriefExperience
  };

    console.log("Sending data:", volunteerData);
    event.volunteers.push(volunteerData); // Add volunteer to array
    await event.save();              // Save changes

    res.send("Volunteer added successfully");
  } catch (error) {
    console.error("Error adding volunteer:", error);
    res.status(500).send("Error adding volunteer");
  }
});


app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})