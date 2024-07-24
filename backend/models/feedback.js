const mongoose = require("mongoose")
const { Schema } = mongoose;

const feedbackSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    feedback:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("feedback",feedbackSchema)
