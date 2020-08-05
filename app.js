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

// Models
const Customer   = require("./models/customers.js");
const Bookings   = require("./models/bookings.js");
const Packages   = require("./models/packages.js");
const Agencies   = require("./models/agencies.js");
const Agents     = require("./models/agents.js");
const Comments   = require("./models/comments.js")

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
  response.render('register', {title: "Register"});
});

app.get('/packages', function(request, response){
  response.render('packages', {title: "Packages"});
});

app.get('/agencies', function(request, response){
  response.render('agencies', {title: "Contact Info"});
});

app.get('/bookings', function(request, response){
  response.render('bookings', {title: "Booking"});
});

app.get('/thankyou', function(request, response){
  response.render('thankyou', {title: "Thank You"});
});

app.get('/registered', function(request, response){
  response.render('registered', {title: "Registration Complete"});
});

app.get('/agencies/:id', function(request, response,){

  Agencies.findOne({'id': request.params.id}, function(error, agencies) {
    // Check for IDs that are not in the list //
    if (!agencies) {
      return response.send('Sorry Invalid ID.');
    }
    // Compile view and respond //
    response.render('agencies', agencies);
    });
  });
  
  // This is the endpoint that the ****************
  app.get('/api/agencies', function(request, response,){
    Agencies.find(function(error, agencies) { 
      response.json(agencies);
    });
  });
  
  app.get('/agents/:id', function(request, response,){
  
    Agents.findOne({'id': request.params.id}, function(error, agents) {
      // Check for IDs that are not in the list //
      if (!agents) {
        return response.send('Sorry Invalid ID.');
      }
      // Compile view and respond //
      response.render('agents', agents);
      });
    });
    
    // This is the endpoint that the ****************
    app.get('/api/agents', function(request, response,){
      Agents.find(function(error, agents) { 
        response.json(agents);
      });
    });

app.get('/packages/:id', function(request, response,){

// .findOne returns the first object it finds //
Packages.findOne({'imgId': request.params.id}, function(error, packages) {
  // Check for IDs that are not in the list //
  if (!packages) {
    return response.send('Sorry Invalid ID.');
  }
  // Compile view and respond //
  response.render('packages',packages);
  });
});

// This is the endpoint that the ****************
app.get('/api/packages', function(request, response,){
  Packages.find(function(error, packages) { 
    response.json(packages);
  });
});

// Adds customer registration info into Mongo database
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
      console.log(err)
    } else {
        console.log(newCustomer)
          res.redirect("/registered")
    }
  });
});


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
      console.log(err)
    } else {
        console.log(newBookings)
          res.redirect("/thankyou")
    }
  }); 
});

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
      console.log(err)
    } else {
        console.log(newComments)
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

