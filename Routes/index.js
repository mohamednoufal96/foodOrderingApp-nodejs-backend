//require router from the express library
const express = require("express");
const router = express.Router();

// import the controllers
const locationController = require("../Controllers/Locations");
const restaurantController = require("../Controllers/Restaurants");
const mealtypeController = require("../Controllers/Mealtypes");
const userController = require("../Controllers/Users");
const menuController = require("../Controllers/Menu");
const paymentsController = require("../Controllers/Payments");
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
// router.get("/getOrderDetals/:user_email", orderDetailsController.getOrderDetailsByUser);

// export the routes
module.exports = router;
