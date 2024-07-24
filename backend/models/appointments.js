const mongoose = require("mongoose")
const { Schema } = mongoose;

const AppointmentsSchema = new Schema({
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    patientName: {
        type: String,
        required: true
    },
    doctor :{
        type: String,
        required:true 
    },
    age :{
       type:Number,
       required:true
    },
    gender:{
       type:String,
       required:true
    },
    mobileNumber: {
        type: Number,
        required: true
    },
})

module.exports =  mongoose.model("Appointments", AppointmentsSchema)
