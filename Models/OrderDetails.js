//import the mongoose
const mongoose = require("mongoose");

//create a schema
const Schema = mongoose.Schema;

//declare fields present in MongoDB collection
const OrderDetailsSchema = new Schema({
    items: [
        {
            item_id: String,
            qty: Number,
        },
    ],
    totalAmount: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    mobileNo: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
});

//create a schema using the model and connect to MongoDB and export the model
module.exports = mongoose.model("OrderDetails", OrderDetailsSchema, "orderDetails");
