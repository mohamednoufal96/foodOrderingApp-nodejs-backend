// import the Models
const Mealtypes = require("../models/Mealtypes");

// export the controller functionalities
exports.getAllMealTypes = (req, res) => {
    Mealtypes.find()
        .then((result) => {
            res.status(200).json({
                message: "Mealtypes fetched",
                mealTypes: result,
            });
        })
        .catch((error) => {
            res.status(500).json({
                message: "Error in database",
                error: error,
            });
        });
};
