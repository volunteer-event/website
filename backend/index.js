var express = require('express')
var app = express();
app.use(express.json());

require("./db");
var profiles = require("./model/people");
var events = require("./model/event");
var cors = require('cors');
app.use(cors());
var port=3000;

app.post( '/signup',async(req,res) => {
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

    res.json({
      name: user.Name,
      email: user.Email,
      phone: user.PhoneNumber,
      address: user.Address,
      gender: user.Gender,
      github: user.GitHub,
      linkedin: user.LinkedIn,
      instagram: user.Instagram,
      website: user.Website
    });

  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});


app.post( '/reg',async(req,res) => {
    try {
        const eventData = {
      ...req.body,
      createdBy: req.body.Email,  
    };
        
        await new events(eventData).save();
        res.send("event created");
    } catch (error) {
        res.status(500).send("Event creation failed");
    }
});

app.post('/api/events/:eventId', async (req, res) => {
  const { eventId } = req.params;
  const { Email } = req.body;

  try {
    const event = await events.findById(eventId);
    if (!event) return res.status(404).send("Event not found");

    const volunteerData = {
      FullName: req.body.FullName,
      Email,
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

app.post('/updateProfile', async (req, res) => {
  try {
    const { Email, ...updatedFields } = req.body;

    const updatedUser = await profiles.findOneAndUpdate(
      { Email: Email },
      { $set: updatedFields },
      { new: true }
    );

    if (!updatedUser) return res.status(404).send("User not found");

    res.json({
      Name: updatedUser.Name,
      Email: updatedUser.Email,
      PhoneNumber: updatedUser.PhoneNumber,
      Address: updatedUser.Address,
      GitHub: updatedUser.GitHub,
      LinkedIn: updatedUser.LinkedIn,
      Instagram: updatedUser.Instagram,
      Website: updatedUser.Website,
      Password: updatedUser.Password,
      Gender: updatedUser.Gender
    });

  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

app.get('/myevents/:email', async (req, res) => {
  try {
    const userEmail = req.params.email;
    const userEvents = await events.find({ createdBy: userEmail });
    res.json(userEvents);
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).send("Error fetching your events");
  }
});



app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})