module.exports = function errorHandler(error, req, res, next) {
    return res.status(error.status || 500).json({
        error: {
            code: error.status,
            message: error.message || "Something is wrong I can feel it!"
        }
    });
}