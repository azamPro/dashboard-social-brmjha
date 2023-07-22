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
webApp.listen(port, () => {
    console.log('200');
});
// Dummy API endpoint 
let users = {
    user1: { username: 'Jawahirah', password: '1234',email:'Jawahirah@gmail.com', like: 65, comment: 3, tweet: 33, views: 300 },
    user2: { username: 'azamPro', password: '1234',email:'azamPro@gmail.com', like: 50, comment: 10, tweet: 45, views: 200 },
    user3: { username: 'nuhaS', password: '1234',email:'nuhaS@gmail.com' ,like: 20, comment: 15, tweet: 20, views: 4000 },
    user4: { username: 'hanadi16', password: '1234ww',email:'hanoali@gmail.com', like: 100, comment: 11, tweet: 45, views: 1000 },

}
// Send users data to the client-side 
webApp.get('/getData',(req,res)=>{
   res.send(users)
})



