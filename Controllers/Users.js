// import the Models
const Users = require('../Models/Users');

// export the controller functionalities

// login
exports.login = (req, res) => {
    const {
        username,
        password
    } = req.body;
    Users.find({
        email: username,
        password: password
    }).then(
        result => {
            if (result.length > 0) {
                res.status(200).json(
                    {
                        message: 'user logged in successfully',
                        isLogged: true,
                        user: result[0]
                    }
                );
            }
            else {
                res.status(500).json(
                    {
                        message: 'username or password is wrong',
                        isLogged: false
                    }
                );
            }

        }).catch(error => {
            res.status(500).json(
                {
                    message: 'Error in database',
                    error: error
                }
            )

        });

}

//// signup
exports.signup = (req, res) => {
    const {
        username,
        password,
        firstName,
        lastName
    } = req.bady;

    // create a user on the User Model class
    const userObj = new User({
        email: username,
        password: password,
        firstName: firstName,
        lastName: lastName
    });

    // call a save method on this object
    userObj.save().then(
        result => {
            res.status(200).json({
                message: 'user signup successful',
                user: result
            })
        }
    ).catch(err => {
        res.status(500).json({
            message: error in database,
            error: err
        })
    })
}

