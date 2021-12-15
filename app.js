//import the needed libraries
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//import the routes
const routes = require("./Routes/index");

//initialise the libraries
const app = express();
app.use(bodyParser.json());

const port = 5454;

// handle the CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// start using the routes
app.use('/', routes);

//connection to mongodb
mongoose
    .connect("mongodb+srv://root:root123@cluster0.k4omk.mongodb.net/zomatodb?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((success) => {
        console.log("successfully connected to mongodb");
        //start the server
        app.listen(port, () => {
            console.log(`server is up and running on port: ${port}`);
        });
    })
    .catch((err) => {
        console.log("error connecting to mongodb :" + err);
    });
