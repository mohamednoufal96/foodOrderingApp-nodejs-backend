//require the model
const OrderDetails = require('../Models/OrderDetails');

//export the controller functionalities
exports.saveOrderDetails = (req, res) => {
    const orderDetails = {
        item,
        quantity,
        amount,
        email,
        mobileNo,
        address
    } = req.body;
    
    //create a new orderDetails  on OrderDetails class
    const orderDetailsObj = new OrderDetails({
        amount: amount,
        email: email,
        mobileNo: mobileNo,
        address: address
    });
    orderDetailsObj['items.item_id'] = item;
    orderDetailsObj['items.quantity'] = quantity;
    
    //call save moethod on this object
    orderDetailsObj.save().then(success => {
        res.status(200).json({
            message: 'order details added',
            details: orderDetailsObj
        })
    }).catch(error => {
        res.status(500).json({
            message: "error in database",
            error: error
        })
    });
}


exports.getOrderDetailsByUser = (req, res) => {
    const email_id = req.params.user_email;
    const find_details = OrderDetails.find({
        email: email_id
    }).then(success => {
        res.status(200).json({
            message: 'order details fetched for email : ' +email_id ,
            details: find_details
        })
    }).catch(error => {
        res.status(500).json({
            message: "error in database",
            error: error
        })
    })
}