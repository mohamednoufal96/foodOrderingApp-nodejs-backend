// import the Models
const Restaurants = require("../Models/Restaurants");

// export the controller functionalities
exports.getAllRestaurantsByLocation = (req, res) => {
    const cityName = req.params.cityName;
    Restaurants.find({
        city: cityName,
    })
        .then((result) => {
            res.status(200).json({
                message: `Restaurants fetched for city ${cityName}`,
                restaurants: result,
            });
        })
        .catch((error) => {
            res.status(500).json({
                message: "Error in database",
                error: error,
            });
        });
};

exports.getRestaurantById = (req, res) => {
    const restId = req.params.rest_id;
    Restaurants.find({
        _id: restId,
    })
        .then((result) => {
            res.status(200).json({
                message: `Restaurant fetched for id ${restId}`,
                restaurant: result[0],
            });
        })
        .catch((error) => {
            res.status(500).json({
                message: "Error in database",
                error: error,
            });
        });
};

exports.filterRestaurants = (req, res) => {
    const { location, mealtype, cuisine, lcost, hcost, sort, page = 1 } = req.body;

    let filters = {};

    if (mealtype) {
        filters.mealtype_id = mealtype;
    }

    if (location) {
        filters.location_id = location;
    }

    if (cuisine && cuisine.length > 0) {
        filters["cuisine.name"] = {
            $in: cuisine,
        };
    }

    if (lcost && hcost) {
        if (lcost == 0) {
            filters.min_price = {
                $lt: hcost,
            };
        } else {
            filters.min_price = {
                $gt: lcost,
                $lt: hcost,
            };
        }
    }

    Restaurant.find(filters)
        .sort({ min_price: sort })
        .then((result) => {
            const pageSize = 2;
            let tempArray = [];

            function paginate(arr, page_size, page_no) {
                let paginatedResult = [];
                paginatedResult = arr.slice(page_size * (page_no - 1), page_size * page_no);
                return paginatedResult;
            }

            /*
            function paginate(arr, page_size, page_no) {
                let paginatedResult = [];
                let start_index = page_size * page_no - 1;
                let end_index = page_size * page_no;
                paginatedResult = arr.slice(start_index, end_index);
                return paginatedResult;
            }
            */

            tempArray = paginate(result, pageSize, page);

            res.status(200).json({
                message: `Filtered Restaurants fetched`,
                restaurants: tempArray,
                totalResultsCount: result.length,
                pageNo: page,
                pageSize: pageSize,
            });
        })
        .catch((error) => {
            res.status(500).json({
                message: "Error in Database",
                error: error,
            });
        });
};
