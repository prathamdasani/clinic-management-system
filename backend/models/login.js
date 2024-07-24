const mongoose = require("mongoose")
const { Schema } = mongoose;

const loginSchema=new Schema({
    password:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("Password",loginSchema)
