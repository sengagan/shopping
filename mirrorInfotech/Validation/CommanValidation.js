

const comman = async(schema,data)=>{
    let response = {
        status:null,
        message:null,
    }
    let validate = schema.validate(data);
    if (validate && validate.error && validate.error.details) {
        response.status = "ERROR";
        response.message = validate.error.details[0].message
    }
    return response;
}

module.exports = {comman}