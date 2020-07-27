const db = require('../models/db_connection');

module.exports = async (req, res, next) => {
    try {
        await db.User.find((err, data) => {
            if (err) console.log(err);
            return res.status(200).json(data);
        });
    } catch (error) {
        return next(error);
    }
}