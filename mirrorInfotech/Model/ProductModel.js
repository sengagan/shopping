
const { Connection } = require("../Database/Connection")

const registrationProduct = async (details) => {
    let query = `INSERT INTO product (title, description,user_id) VALUES ('${details.title}', '${details.description}','${details.user_id}');    `
    return new Promise(await function (resolve, reject) {
        Connection.query(query, (error, result) => {
            if (error) {
                reject(error)
            } else {
                resolve(result)
            }
        })
    })
}

const updateProduct = async (details) => {
    let query = `UPDATE product SET title='${details.title}',description='${details.description}',status='${details.status}' WHERE id = '${details.id}'`
    return new Promise(await function (resolve, reject) {
        Connection.query(query, (error, result) => {
            if (error) {
                reject(error)
            } else {
                resolve(result)
            }
        })
    })
}

const getAllProduct = async () => {
    let query = `Select * from product`
    return new Promise(await function (resolve, reject) {
        Connection.query(query, (error, result) => {
            if (error) {
                reject(error)
            } else {
                resolve(result)
            }
        })
    })
}

const getById = async (id) => {
    let query = `SELECT product.*, User.email FROM product
    JOIN User ON product.user_id = User.id WHERE product.user_id = '${id}';`
    return new Promise(await function (resolve, reject) {
        Connection.query(query, (error, result) => {
            if (error) {
                reject(error)
            } else {
                resolve(result)
            }
        })
    })
}

const deleteProduct = async (id) => {
    let query = `DELETE FROM product WHERE id='${id}';`
    return new Promise(await function (resolve, reject) {
        Connection.query(query, (error, result) => {
            if (error) {
                reject(error)
            } else {
                resolve(result)
            }
        })
    })
}

const getDataByProductId = async (id) => {
    const  query = `SELECT * FROM product WHERE id = '${id}'`;
    return new Promise(await function(resolve,reject){
        Connection.query(query,(error,result)=>{
            if(error){
                reject(error)
            }else{
                resolve(result)
            }
        })
    }) 
};

const search= async(fieldName)=>{
    const query = `SELECT * FROM product WHERE Product_name LIKE '%fieldName%';`
    return new Promise(await function(resolve,reject){
        Connection.query(query,(error,result)=>{
            if(error)
            {
                reject(error)
            }else{
                resolve(result)
            }
        })
    })
}

module.exports = { search , registrationProduct, getAllProduct, getById, deleteProduct, updateProduct , getDataByProductId }