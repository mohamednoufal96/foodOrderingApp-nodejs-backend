// import the mongoose
const mongoose = require('mongoose');

// create a schema
const Schema = mongoose.Schema;

// declare fields present in the mongodb collection
const MealtypeSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        meal_type: {
            type: Number,
            required: true
        }
    }
);

// create a model using the schema and connent to MongoDB and export the model
module.exports = mongoose.model('MealTypes', MealtypeSchema, 'mealtypes');