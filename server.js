// Express to run server and routes
const express = require('express');
// Create an instance of a web app
const webApp = express();
// Connect the rest of the packages (Body-Parser + CORS) to the web app
// Middleware package
const bodyParser = require('body-parser')
//Configuring express to use body-parser as middle-ware
webApp.use(bodyParser.urlencoded({ extended: false }));
webApp.use(bodyParser.json());
// CORS package 
const cors = require('cors');
webApp.use(cors());
// Connects the server-side to the client-side 
webApp.use(express.static('website'));
// Local server
const port = 8080;
webApp.listen(port,()=>{
    console.log('200');
});