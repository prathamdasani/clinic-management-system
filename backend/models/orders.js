const mongoose = require("mongoose")
const { Schema } = mongoose;

const OrdersSchema=new Schema({
    orderId:{
        type:String,
        required:true
    },
    product:[{
        productName:{type:String},
        quantity:{type:Number}
    }],
    totalAmount:{
        type:Number,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    Upi_id:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model('Orders',OrdersSchema)