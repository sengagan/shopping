const productModel = require("../Model/ProductModel");
require("dotenv").config()
const jwt = require("jsonwebtoken")

const registrationProduct = async (req, res) => {
    let token = req.body.token;
    const decodedToken = jwt.verify(token, process.env.SECRETKEY);
    let getData = await productModel.getById(decodedToken);
    let details = {
        title: req.body.title,
        description: req.body.description,
        user_id: decodedToken.userid,
    }
    let response = await productModel.registrationProduct(details)
    return response;
}

const updateProduct = async (req, res) => {
    let details = {
        title: req.body.title,
        description: req.body.description,
        id: req.body.id,
        status: req.body.status,
    }
    let response = await productModel.updateProduct(details)
    return response;
}



const getAllProduct = async () => {
    let response = {
        status: null,
        message: null,
    }
    const getAllData = await productModel.getAllProduct()
    if (getAllData && getAllData.length <= 0) {
        response.status = "ERROR",
            response.message = "data not found"
    }
    else {
        response.status = "get Data succeffully",
            response.message = getAllData
    }
    return response
}

const getById = async (req, res) => {
    let response = {
        status: null,
        message: null,
    };
    try {
        const token = req.params.token;
        const decodedToken = jwt.verify(token, process.env.SECRETKEY);
        let getData = await productModel.getById(decodedToken.userid);
        if (!getData || getData.length === 0) {
            response.status = "ERROR";
            response.message = "Data not found";
        } else {
            response.status = "Success";
            response.message = getData;
        }
    } catch (error) {
        response.status = "ERROR";
        response.message = error.message;
    }
    return response;
};

const deleteProduct = async (req, res) => {
    let id = req.params.id;
    await productModel.deleteProduct(id);
    return true;
}

const search = async (req, res) => {
    let fieldName = req.body;
    await productModel.search(fieldName)
    return true;
}

module.exports = { search, registrationProduct, getAllProduct, getById, deleteProduct, updateProduct }