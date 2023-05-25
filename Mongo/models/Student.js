const mongoose = require('mongoose');


const studentSchema = new mongoose.Schema({
    fullName:String,
    email:String,
    mobile:String,
    city:String
});

const Student = mongoose.model("Student", studentSchema);
