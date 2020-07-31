// import all modules
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');
const moment = require('moment'); 
const today      = moment();
const bodyParser = require('body-parser');

// Our Model
const { userInfo } = require('os');

// create express app
const app = express();
app.set('view engine', 'ejs');

// Cors origin URL - Allow inbound traffic from origin //
// corsOptions = {
//   origin: "https://travel-experts-prototype.herokuapp.com/",
//   optionsSuccessStatus: 200 
// };
// app.use(cors(corsOptions));

// automatically check if requested file is found in /public. If yes, return that file as a response to the browser
app.use(express.static(path.join(__dirname, 'public')));

// Define an endpoint handlers for the home page to render 
app.get('/', function(request, response){
  response.render('index',{});
});

app.get('/login', function(request, response){
  response.render('login',{});
});

app.get('/register', function(request, response){
  response.render('register',{});
});

app.get('/gallery', function(request, response){
  response.render('gallery',{});
});

// Define an endpoint handler for the individual destination pages
// app.get('/:id', function(request, response){


// add current year using moment module
const yearFormat="YYYY"
app.locals.moment = moment;
app.locals.yearFormat = yearFormat;

// start up server
const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});


mongoose.connect("mongodb://localhost:27017/register_user", { useUnifiedTopology: true,useNewUrlParser: true });

//SCHEMA SETUP
const register_userSchema = new mongoose.Schema({
  name: String,
});

const Register_user = mongoose.model("register_user", register_userSchema);

Register_user.create(
  {
    name: "name_input"
  }, function(err, register_user){
    if(err){
      console.log(err);

      }
       else {
         console.log("new registered user: ");
         console.log(register_usser);
       }
    });
    
const register_user = [
  {name: "Dave"}
]

