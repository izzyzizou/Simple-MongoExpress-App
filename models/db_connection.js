const mongoose = require('mongoose');
const User = require("./user");
mongoose.Promise = Promise;
mongoose.set("debug", true);
mongoose.connect("mongodb://localhost/test", {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
});

module.exports.User = require("./user");