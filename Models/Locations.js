// import the mongoose
const mongoose = require('mongoose');

// create a schema
const Schema = mongoose.Schema;

// declare fields present in the mongodb collection 
const LocationSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        city_id: {
            type: Number,
            required: true
        },
        location_id: {
            type: Number,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        country_name: {
            type: String,
            required: true
        }
    }
);

// create a model using the schema and connent to MongoDB and export the model
module.exports = mongoose.model('Locations', LocationSchema, 'locations');