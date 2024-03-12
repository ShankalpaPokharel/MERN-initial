exports.handleServerError = (error, req, res, next) => {
    console.log("handle server error")
        return res.send(error.stack)
};

exports.pageNotFound = (req, res, next) => {
    res.status(404).send({ message: "page not found" });
};
