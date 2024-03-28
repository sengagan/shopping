const joi = require("joi");
const comman = require("../Validation/CommanValidation");

const userRegistration = async (req, res) => {
    try {
        const data = req.body;
        const schema = joi.object({
            name: joi.string().required(),
            email: joi.string().email().required(),
            password: joi.string().required() 
        });
        const response = await comman.comman(schema, data);
        return response;
    } catch (error) {
        return { status: "ERROR", message: "Validation failed" }; 
    }
};

const userLogin = async (req, res) => {
    try {
        const data = req.body;
        const schema = joi.object({
            email: joi.string().email().required(),
            password: joi.string().required() 
        });
        const response = await comman.comman(schema, data);
        return response;
    } catch (error) {
        return { status: "ERROR", message: "Validation failed" }; 
    }
};

module.exports = { userRegistration, userLogin };
