// import the Models
const Locations = require("../models/Locations");

// export the controller functionalities
exports.getAllLocations = (req, res) => {
    Locations.find()
        .then((result) => {
            res.status(200).json({
                message: "Locations fetched",
                locations: result,
            });
        })
        .catch((error) => {
            res.status(500).json({
                message: "Error in database",
                error: error,
            });
        });
};
