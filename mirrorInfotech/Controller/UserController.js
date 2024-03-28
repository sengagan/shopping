const userService = require("../Service/UserService");
const userValidation = require('../Validation/UserValidation');

const userRegistration = async (req, res) => {
        const validate = await userValidation.userRegistration(req, res);
        console.log("validate", validate);
        if (validate.status === "ERROR") {
            return res.status(400).json({ "ERROR": validate.message });
        }
        const response = await userService.userRegistration(req, res);
        console.log("response",response );
        res.status(200).json({ "MESSAGE": response });
};

const userLogin = async (req, res) => {
    try {
        const validate = await userValidation.userLogin(req, res);
        console.log("validate", validate);
        if (validate.status === "ERROR") {
            return res.status(400).json({ "ERROR": validate.message });
        }
        const serviceResponse = await userService.userLogin(req, res);
        console.log("Service", serviceResponse);
        res.status(200).json({ "MESSAGE": serviceResponse.message , "TOKEN": serviceResponse.token });
    } catch (error) {
        res.status(500).json({ "ERROR": "Internal Server Error" });
    }
};

module.exports = { userRegistration, userLogin };
