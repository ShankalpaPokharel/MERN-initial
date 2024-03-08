
exports.joiValidationUtils = (res,err)=>{
    res.status(400).send({
        message:"Validation Error",
        error:err.details.map(er=>{
            return {
                field: er.context.key,
                message: er.message
            }
        })
    })
}