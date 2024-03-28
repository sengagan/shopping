const userModel = require("../Model/UserModel");
const jwt = require("jsonwebtoken")
require("dotenv").config()
const bcrypt = require('bcrypt');

const userRegistration = async (req, res) => {
    let response = {
        status: null,
        message: null,
    };
    let hashedPassword = await bcrypt.hashSync(req.body.password, 10);
    let data = {
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
    };
    let getData = await userModel.getDataByEmail(data.email);
    if (getData && getData.length > 0) {
        response.status = "ERROR";
        response.message = "This  email already register";
    }
    else {
        await userModel.userRegistration(data);
        response.status = "successfull";
        response.message = "registration successfully";
    }
    return response
};


const userLogin = async (req, res) => {
    let response = {
        status: null,
        message: null,
        token: null,
    }
    let data = {
        email: req.body.email,
        password: req.body.password,
    }
    let getData = await userModel.getDataByEmail(data.email)
    if (getData && getData.length <= 0) {
        response.status = "ERROR";
        response.message = "email not found";
    }
    else {
        const checkPassword = await bcrypt.compare(data.password, getData[0].password)
        console.log("=checkPassword=", checkPassword);
        if (!checkPassword) {
            response.status = "ERROR";
            response.message = "Invalid email or Password";
        }
        else {
            var token = jwt.sign({ userid: getData[0].id, userEmail: getData[0].email }, process.env.SECRETKEY, { expiresIn: '5d' });
            response.status = "successfully login"
            response.message = "verification successfully"
            response.token = token
            return response;


        }
    }
    return response;
}

module.exports = { userRegistration, userLogin }