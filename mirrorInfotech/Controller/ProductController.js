const productValidation = require("../Validation/ProductValidation");
const productService = require("../Service/ProductService");

const registrationProduct = async (req, res) => {
    try {
        const validate = await productValidation.registrationProduct(req, res);
        console.log("validate", validate);
        if (validate.status === "ERROR") {
            return res.status(400).json({ "ERROR": validate.message });
        }
        const response = await productService.registrationProduct(req, res);
        console.log("response", response);
        res.status(200).json({ "MESSAGE": "registration succefull" });
    } catch (error) {
        res.status(500).json({ "ERROR": "Internal Server Error"});
    }
}

const updateProduct = async (req, res) => {
    try {
        const validate = await productValidation.updateProduct(req, res);
        console.log("validate", validate);
        if (validate.status === "ERROR") {
            return res.status(400).json({ "ERROR": validate.message });
        }
        const response = await productService.updateProduct(req, res);
        console.log("response", response);
        res.status(200).json({ "MESSAGE": "updated" });
    } catch (error) {
        res.status(500).json({ "ERROR": "Internal Server Error"});
    }
}

const getAllProduct = async (req, res) => {
    try {
        const response = await productService.getAllProduct();
        res.status(200).json({ "MESSAGE": response });
    } catch (error) {
        res.status(500).json({ "ERROR": "Internal Server Error" });
    }
}

const getById = async (req, res) => {
    try {
        const response = await productService.getById(req, res);
        res.status(200).json({ "MESSAGE": response });
    } catch (error) {
        res.status(500).json({ "ERROR": "Internal Server Error" });
    }
}

const deleteProduct = async (req, res) => {
    try {
        const response = await productService.deleteProduct(req, res);
        res.status(200).json({ "MESSAGE": "deleted" });
    } catch (error) {
        res.status(500).json({ "ERROR": error });
    }
}

const search = async (req, res) => {
    const data = await productService.search(req, res)
    res.status(200).json({ 'message': data })
}

module.exports = { search, registrationProduct, getAllProduct, getById, deleteProduct, updateProduct }