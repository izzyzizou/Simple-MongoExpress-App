const db = require('../models/db_connection');
const jwt = require('jsonwebtoken');
module.exports = async (req, res, next) => {
    try {
        let user = await db.User.create(req.body);
        let { id, name, email } = user;
        const token = jwt.sign({
            id,
            name,
            email
        }, process.env.SECRET_KEY);

        return res.status(200).json({
            id,
            name,
            email,
            token
        });
    } catch (e) {
        if (e.code === 11000) {
            e.message = "User or email is already taken";
        }

        return next({
            status: 400,
            message: e.message
        });
    }
}