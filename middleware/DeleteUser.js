const db = require("../models/db_connection");

module.exports = async (req, res, next) => {
    db.User.deleteOne({ _id: req.params.id }, (err, data) => {
        if (err) next(err);
        res.status(200).json({ message: "Deleted" });
    });
}