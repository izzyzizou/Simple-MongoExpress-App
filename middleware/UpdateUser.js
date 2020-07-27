const db = require("../models/db_connection");

module.exports = async (req, res, next) => {
    await db.User.updateOne({
        _id: req.body._id
    },
        {
            name: req.body.name,
            email: req.body.email
        },
        (err, data) => {
            if (err) next(err);
            res.status(200).json({data});
        });
}