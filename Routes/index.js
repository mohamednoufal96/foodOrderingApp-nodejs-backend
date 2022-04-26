//require router from the express library
const express = require("express");
const router = express.Router();

// import the controllers
const locationController = require("../controllers/Locations");
const restaurantController = require("../controllers/Restaurants");
const mealtypeController = require("../controllers/Mealtypes");
const userController = require("../controllers/Users");
const menuController = require("../controllers/Menu");
const paymentsController = require("../controllers/Payments");
// const orderDetailsController = require("../Controllers/OrderDetails");

// declare the routes and bind it with controller methods
router.get("/getAllLocations", locationController.getAllLocations);
router.get("/getAllMealTypes", mealtypeController.getAllMealTypes);
router.get("/getAllRestaurantsByLocation/:cityName", restaurantController.getAllRestaurantsByLocation);
router.get("/getRestaurantById/:rest_id", restaurantController.getRestaurantById);
router.get("/getMenuForRestaurant/:restId", menuController.getMenuForRestaurant);
router.post("/filter", restaurantController.filterRestaurants);
router.post("/login", userController.login);
router.post("/signup", userController.signup);
router.post("/payment", paymentsController.payment);
router.post("/paymentCallback", paymentsController.paymentCallback);

// router.post("/saveOrderDetails", orderDetailsController.saveOrderDetails);
// router.get("/getOrderDetals/:username", orderDetailsController.getOrderDetailsByUser);

// export the routes
module.exports = router;
