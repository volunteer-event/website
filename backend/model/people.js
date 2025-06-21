
var mongoose = require('mongoose');
var peopleschema = mongoose.Schema({
        Name:String,
        PhoneNumber:Number,
        Email:String,
        Password:String,
        Address:String,
        Gender:String,
        Website: String,
        GitHub: String,
        LinkedIn: String,
        Instagram: String
});

var peoplemodel = mongoose.model("Profile",peopleschema);

module.exports=peoplemodel;