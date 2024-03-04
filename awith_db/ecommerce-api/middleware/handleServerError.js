exports.handleServerError = (err, req, res, next) => {
    let statusCode = 500;
    let message = "Server Error";
    let error = err.details

    if (err.name == "ValidationError") {
        console.log("val handle server error")
        statusCode=400;
        message = err.name;
        error = err.details.map(er => {
                return {
                    field: er.context.key,
                    message: er.message
                }
            })
        console.log(error)
        
    }
    return res.status(statusCode).send({message,error});
}



