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
const app        = express();
app.set('view engine', 'ejs');

// automatically check if requested file is found in /public. If yes, return that file as a response to the browser
app.use(express.static(path.join(__dirname, 'public')));

// Cors origin URL - Allow inbound traffic from origin //
corsOptions = {
  origin: "https://travel-experts-prototype.herokuapp.com",
  optionsSuccessStatus: 200 
  };
  app.use(cors(corsOptions));


// Models
const Customer   = require("./models/customers.js");
const Bookings   = require("./models/bookings.js");
const Packages   = require("./models/packages.js");
const Agencies   = require("./models/agencies.js");
const Agents     = require("./models/agents.js");
const Comments   = require("./models/comments.js")
const { forEach } = require('async');

// MongoDB connection
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


// Define an endpoint handler for the home page to render
app.get('/', function(request, response){
  response.render('index', {title: "Home"});
});

app.get('/login', function(request, response){
  response.render('login', {title: "Login"});
});

app.get('/asia', function(request, response){
  response.render('asia', {title: "Asian Expedition"});
});

app.get('/europe', function(request, response){
  response.render('europe', {title: "European Vacation"});
});

app.get('/caribbean', function(request, response){
  response.render('caribbean', {title: "Caribbean New Year"});
});

app.get('/polynesia', function(request, response){
  response.render('polynesia', {title: "Polynesian Paradise"});
});

app.get('/register', function(request, response){
  response.render('register', {title: "Registration"});
});

app.get('/packages', function(request, response){
  Packages.find(function (error, packages) {
    data = { packages_data: packages }
    response.render('packages', {title: "Vacation Packages"});
  });  
});

app.get('/agencies', function (request, response) {
  Agencies.find(function (error, agencies) {
    Agents.find(function (error, agents) {
      data = { agencies_data: agencies, agents_data: agents }
      response.render('agencies', { page_data: data, title:  "Contact Us" });
    })
  });
});

app.get('/thankyou', function(request, response){
  response.render('thankyou', {title: "Thank You"});
});

app.get('/registered', function(request, response){
  response.render('registered', {title: "Registration Complete"});
});

// Allows the packages to populate in the package page
app.get('/api/packages', function(request, response,){
  Packages.find(function(error, packages) { 
    response.json(packages);
  });
});

// Adds new customer registration info into Mongo database
app.post ("/customers", function(req, res){

  const firstName      = req.body.firstName;
  const lastName       = req.body.lastName;
  const address        = req.body.address;
  const city           = req.body.city;
  const prov           = req.body.prov;
  const postal         = req.body.postal;
  const country        = req.body.country;
  const homePhone      = req.body.homePhone;
  const busPhone       = req.body.busPhone;
  const email          = req.body.email;
  const userid         = req.body.userid;
  const passwd         = req.body.passwd;
  const newCustomer = {
    CustFirstName: firstName,
    CustLastName:  lastName,
    CustAddress:   address,
    CustCity:      city,
    CustProv:      prov,
    CustPostal:    postal,
    CustCountry:   country,
    CustHomePhone: homePhone,
    CustBusPhone:  busPhone,
    CustEmail:     email,
    userid:        userid,
    passwd:        passwd,
    }

  Customer.create(newCustomer, function(err, newlyCreated){
    if (err){
      // console.log(err)
    } else {
        // console.log(newCustomer)
          res.redirect("/registered")
    }
  });
});

// Adds new customer booking info into Mongo database
app.post ("/bookings", function(req, res){
  const bookingDate    = req.body.bookingDate;
  const firstName      = req.body.firstName;
  const lastName       = req.body.lastName;
  const homePhone      = req.body.homePhone;
  const busPhone       = req.body.busPhone;
  const travelerCount  = req.body.travelerCount;
  const newBookings = { 
    BookingDate:   bookingDate,   
    CustFirstName: firstName,
    CustLastName:  lastName,     
    CustHomePhone: homePhone,
    CustBusPhone:  busPhone,       
    TravelerCount: travelerCount,   
  }

  Bookings.create(newBookings, function(err, newlyCreated){
    if (err){
      // console.log(err)
    } else {
        // console.log(newBookings)
          res.redirect("/thankyou")
    }
  }); 
});
// Adds new customer comments info into Mongo database
app.post ("/comments", function(req, res){
  const custName      = req.body.custName;
  const custEmail     = req.body.custEmail;
  const custComments  = req.body.custComments;
  const newComments = { 
    CustName:     custName,
    CustEmail:    custEmail,           
    CustComments: custComments,
  }

  Comments.create(newComments, function(err, newlyCreated){
    if (err){
      // console.log(err)
    } else {
        // console.log(newComments)
          res.redirect("/")
    }
  }); 
});

/// necessary for 4 digit year in footer //
app.locals.moment = moment;

// If no file or endpoint found, send a response to the 404 page //
app.use(function(req, res, next) {
  res.status(404);
    res.render('404', {title: "404"});
});

// Start up server //
const PORT = process.env.PORT || 3000;
  app.listen(PORT, function(){
    console.log(`Listening on port ${PORT}`);
});

