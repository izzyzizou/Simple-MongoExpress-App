const express = require('express');
const router = express.Router();
// const save = require('../middleware/SaveUser');
const read = require('../middleware/ReadUser');
const update = require('../middleware/UpdateUser');
const delete_ = require('../middleware/DeleteUser');
const { signin, signup } = require("../handlers/auth");

router.get("/", read);
router.post("/signup", signup);
router.post("/signin", signin);
// router.post("/save", save);
router.post("/update", update);
router.get("/delete/:id", delete_);

module.exports = router;