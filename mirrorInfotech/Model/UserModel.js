const {Connection} = require("../Database/Connection");

const getDataByEmail = async (email) => {
    const  query = `SELECT * FROM user WHERE email = '${email}'`;
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


const userRegistration = async (data) => {
    let query = `INSERT INTO user (name,email,password) VALUES ('${data.name}','${data.email}','${data.password}')`;
    return new Promise(await function(resolve,reject){
        Connection.query(query,(error,result)=>{
            if(error){
                reject(error)
            }else{
                resolve(result)
            }
        })
    })
}



module.exports = { getDataByEmail , userRegistration }