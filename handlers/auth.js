const db = require("../models/db_connection");
const jwt = require('jsonwebtoken');

exports.signin = async function (req, res, next) {
    try {
        let user = await db.User.findOne({ email: req.body.email });
        let { id, name, email } = user;
        let isMatch = await user.comparePassword(req.body.password);
        if (isMatch) {
            const token = jwt.sign({
                id,
                name,
                email
            }, process.env.SECRET_KEY);
            return res.status(200).json({
                id,
                name,
                token
            });
        } else {
            return next({
                status: 400,
                message: "Invalid email/password"
            });
        }
    } catch (error) {
        return next({
            status: 400,
            message: "Invalid email/password"
        });
    }
}

exports.signup = async function(req, res, next) {
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