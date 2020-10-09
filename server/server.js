// Imports
const express = require('express');
const webRoutes = require('./routes/web');

// Express app creation
const app = express();

// Configurations
const appConfig = require('./configs/app');

// Receive parameters from the Form requests
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

// Routes
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    next();
});
app.use('/', webRoutes);

// App init
app.listen(appConfig.expressPort, () => {
    console.log(`Server is listenning on ${appConfig.expressPort}! (http://localhost:${appConfig.expressPort})`);
});