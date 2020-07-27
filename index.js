require('dotenv').config();
const app = require('express')();
const bodyParser = require('body-parser');
const errorHandler = require("./handlers/error");
const crudRoutes = require('./routes/crudRoutes');

app.use(bodyParser.json());

app.use("/forum", crudRoutes);

app.use((req, res, next) => {
    let error = new Error("Not Found");
    error.status = 404;
    next(error);
});

app.use(errorHandler);

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});