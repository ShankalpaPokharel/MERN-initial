exports.handleServerError = (error, req, res, next) => {
    
        return res.send(error.stack)
};

exports.pageNotFound = (req, res, next) => {
    res.status(404).send({ message: "page not found" });
};
