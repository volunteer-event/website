var mongoose = require('mongoose');

var eventSchema = mongoose.Schema({
    ContactInfo:String,
    EventName:String,
    OrganisorName:String,
    EventDescription:String,
    Category:String,
    Mode:String,
    HostingCity:String,
    StartDateTime:Date,
    EndDateTime:Date,
    Deadline:Date,
    MaxVolunteer:Number,
    MaxParticipant:Number,
    VolunteerQualification:String,
    Poster:String,
    AdditionalInfo:String,
    createdBy: { type: String, required: true },
    volunteers: [
    {
      FullName: String,
      Email: String,
      PhoneNumber: String,
      Age: String,
      EducationQualification: String,
      Cause: String,
      Roles: [String],
      AptForRole: String,
      Skills: String,
      PriorExperience: Boolean,
      BriefExperience: String,
      


    }
  ]
});

var eventmodel = mongoose.model("Event",eventSchema);

module.exports=eventmodel;