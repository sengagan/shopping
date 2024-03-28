
const joi = require("joi")
const comman = require("./CommanValidation");

const registrationProduct = async(req,res)=>{
    let data = req.body;
    let schema = joi.object({
        title :joi.string().required(),
        description : joi.string().required(),
        token : joi.string().required()
    })
    const validate = await comman.comman(schema,data)
    return validate
}

const updateProduct = async(req,res)=>{
    let data = req.body;
    let schema = joi.object({
        title :joi.string().required(),
        description : joi.string().required(),
        id:joi.string().required(),
        status:joi.string(),
    })
    const validate = await comman.comman(schema,data)
    return validate
}

module.exports = { registrationProduct ,  updateProduct }