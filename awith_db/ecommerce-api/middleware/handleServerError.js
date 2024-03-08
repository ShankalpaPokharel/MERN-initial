exports.handleServerError = (err, req, res, next) => {
    console.log("enter handle server error")
    let statusCode = 500;
    let message = "Server Error";
    let error = err;

    
    return res.status(statusCode).send(Object.entries(error.errors).map(([field, error]) => ({
        field,
        message: error.message
    })))
    
}



exports.pageNotFound = (req,res,next)=>{
    res.status(404).send({message:"page not found"})
}