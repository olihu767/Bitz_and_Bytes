// import all modules
const path       = require('path');
const express    = require('express');
const mongoose   = require('mongoose');
const dotenv     = require('dotenv').config();
const cors       = require('cors');
const moment     = require('moment'); 
const today      = moment();
const bodyParser = require('body-parser');

// create express app
const app = express();
app.set('view engine', 'ejs');

// automatically check if requested file is found in /public. If yes, return that file as a response to the browser
app.use(express.static(path.join(__dirname, 'public')));

const Customer = require("./models/customers.js");

const mongoDB = process.env.MONGODB_URL;

mongoose.connect(mongoDB, { useUnifiedTopology: true,useNewUrlParser: true });

const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors) //
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Set a callback to let us know we've successfully connected //
db.once('open', function() {
  console.log('Congrats! You are connected to MongoDB...');
});

app.use(bodyParser.urlencoded ({extended:true}));

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


// const Agency = require("./models/agency.js");

app.post ("/", function(req, res){

  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const address = req.body.address;
  const city = req.body.city;
  const prov = req.body.prov;
  const postal = req.body.postal;
  const country = req.body.country;
  const homePhone = req.body.homePhone;
  const busPhone = req.body.busPhone;
  const userid = req.body.userid;
  const pswwd = req.body.psswd;
  const email = req.body.email;
  
  const newCustomer = {
    CustFirstName: firstName,
    CustLastName: lastName,
    CustAddress: address,
    CustCity: city,
    CustProv: prov,
    CustPostal: postal,
    CustCountry: country,
    CustHomePhone: homePhone,
    CustBusPhone: busPhone,
    CustUserId: userid,
    CustPsswd: psswd,
    CustEmail: email,
  
};
// create a new customer into DB
Customer.create(newCustomer, function(err, newlyCreated){
  if (err){
    console.log(err)
  } else {
    console.log(newCustomer)
    res.redirect("/")
  }
})
});
  
// app.get("/order/package", function(req,res){
//   res.render("order.ejs")
// });

// add current year using moment module
const yearFormat="YYYY"
  app.locals.moment = moment;
  app.locals.yearFormat = yearFormat;

// start up server
const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});



