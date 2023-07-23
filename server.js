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
    // Indicates that the server is up and running
    console.log('200');
});
// Dummy API endpoint 
let users = [
     { username: 'Jawahirah', password: '1234',name:'Jawahira Ali', like: 65, comment: 3, tweet: 33, views: 300 },
      { username: 'azamPro', password: '1234',name:'Azam Khaled', like: 50, comment: 10, tweet: 45, views: 200 },
    { username: 'nuhaS', password: '1234',name:'Nuha Ali' ,like: 20, comment: 15, tweet: 20, views: 4000 },
     { username: 'hanadi16', password: '1234ww',name:'Hanadi Azam', like: 100, comment: 11, tweet: 45, views: 1000 },
]
// Check if user exist i
let checkIfUserExist = (username) => {
    for (let i = 0; i < users.length; i++) {
        if (users[i].username.toLowerCase() == username.toLowerCase()) {
            // Username already exists
            return true;
        }
    }
    // Username doesn't exist
    return false;
}
// Send users data to the client-side 
webApp.get('/getData',(req,res)=>{
   res.send(users)
})
// Store new user data 
webApp.post('/addData',(req,res)=>{
    // Check if username already exists
    if (!checkIfUserExist(req.body.username)){
        // Store user data
        users.push(req.body)
        res.send("1")
    }else{
        res.send("200")
    }
})
 