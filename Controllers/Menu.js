// import the Models
const Menu = require("../models/Menu");

// export the controller functionalities

exports.getMenuForRestaurant = (req, res) => {
    const rest_id = req.params.restId;
    Menu.find({
        restaurantId: rest_id,
    })
        .then((result) => {
            res.status(200).json({
                message: `Menu fetched for restaurant ${rest_id}`,
                menu: result,
            });
        })
        .catch((error) => {
            res.status(500).json({
                message: "Error in Database",
                error: error,
            });
        });
};
