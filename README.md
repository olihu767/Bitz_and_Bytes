# Bitz_and_Bytes

#### Table of Contents  

* [Project Title](#Project-Title)
* [Scope of work](#Scope-of-work)
* [Project setup](#Project-setup)
* [Technologies/Software](#Technologies/Software)
* [Frontend/Backend helpful links](#Frontend/Backend-helpful-links)
* [Frontend part](#Frontend-part)
* [Backend part](#Backend-part)
* [Acknowledgements](#Acknowledgements)


This is a group project to create a prototype website to upgrade older computer technology for a small travel agency.
A travel agency contracted Bitz and Bytes team to build a state-of-the-art web/desktop application that will enable customers to place
online orders and have desktop software for their agents to maintain the data.


## Project Title
A prototype website for the Travel Experts Inc. travel agency. 


## Scope of work

Frontend site HTML/JavaScript/CSS: 

Design and construct a prototype website for the Travel Experts travel agency.
Produce HTML pages with Cascading Stylesheet and Javascript enhancements
Include server-side functionality and will evolve into a dynamically generated, database-driven web application.

Frontend features

1. Improve a “Home”  page to welcome the customer to the site and provide links and menus to the other pages.
2. Add an information about how to phone, email and locate the agency through “Contact Us” page.
3. Create a “Package” page listing all vacation packages available. 
4. Make a “Register” page that will allow a customer to set up an
account with Travel Experts by entering their name, address (including
city, province, country, and postal code), email address, home phone
number, business phone number, user ID, and password. 
5.Establish an account for future orders. The data will be submitted to a test page (use bouncer.php). 

Server-side processing with Node.js, MySQL, and MongoDB:

Provide dynamic generation of the web pages developed on a frontend to capture form data from the customers. 
Install database and create scripts to store and retrieve customers data using MongoDB database server.

Backend features:

1. Modify the packages web page by inserting code to read the database and generate the package list from the travel package table. 
Add a description, start and end dates, and price to each package. 
2. Re-design the contact page to be generated from the database. Display all the agencies, showing the agency address and phone number,
followed by the contact information for each agent at that agency.
3. Create an order button next to each package which will go to an order page that has a customer order form for that package. 
Customers will be able to enter their data and submit the order which will result in creation of a customer and a booking record. 


## Project setup

1. Initialize static project using npm and make sure the website is up and runing on http://localhost:3000/
2. Install all dependencies and setup json packages.
3. Locate static assets in public directory and update ejs files.
4. Establish mongoose connection using .env file and deploy application through Heroku.


## Technologies/Software

JavaScript, HTML/CSS, Git, VSCode, Codepen, Node, Pug/Ejs, MongoDB Atlas, Heroku
 
## Frontend/Backend helpful links

https://www.freecodecamp.org/news/requiring-modules-in-node-js-everything-you-need-to-know-e7fbd119be8/

https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes

https://kaloraat.com/articles/how-to-use-mongodb-atlas

https://www.sitepoint.com/managing-dates-times-using-moment-js/

https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics

### Frontend part


Vadim Savenkov:

Worked with Cascading Style Sheet code to provide style consistency for all forms through out.

Created additional css files for booking and contacting pages to avoid overwhelming with main.css

Re-adjusted navigation panel, add highlighting effects to tabs, enhance each tab with additional icons.   
 
Researched for footer enhancements. Upgrade a footer with the company value message, add social links and extra navigation tabs. 
  
Made a login form to be positioned in the middle of the page, work with font size and colors. 

Added upgrades to registration/booking forms making it more user friendly.

Selected colors, added highlighting and hovering effects to all submit buttons.

Structured and wrote readme file.     


Joyce Ou:

Created of the github repository.

Created of Welcome pages and all the background pictures and modified css stylesheet.

Modified ejs and css style sheet on contact pages and packages. 

Cleaned up and modified all the pages as we conduct the enhancement features for the website.

Corodinated with Vadim and other team memember as required.


### Backend part

Sean Maclennan:

Re wrote packages.js for use with all new MongoDB Atlas fields.

Created new db fields and populated them as needed.

Wrote new vacation packages descriptions.

Created package specific .ejs files, asia.ejs etc.

Researched date validation methods and the unix timestamp.

Wrote date validation code for comparing package start dates to current date in packages.js.

Selected images for package cards.

Cleaned up small issues with syntax and corrected typos.

Provided general feedback and contribution to design, styling and functionality

Dave Hahner:
  Project Manager-
 	  Communicated to the group the initial project information obtained during the kick-off meeting held July 24 from 14:00 -14:28.
 	  Facilitated the creation of the team name.
 	  Created the Group Charter Template.
 	  Collaborated with the team members to determine each participants roles and responsibilities, and document them in the charter and finalize.
 	  Created Gantt chart.
 	  Created .ppt presentation template, populate the data in collaboration with the team.
 	  Send Meeting invites and agendas.

  Dev Ops-
 	  Managed MongoDB databases and connections to the required pages: posts and creates, (app.js)
    Created Models, nav.js, manipulated .ejs files as necessary

  Tester-
 	  Tested site functionality, debugging and error reporting to the other team members.
    Reviewed and cleansed all CSS


## Acknowledgements

Tony Grimes - Adjunct Instructor at SAIT.
Dave Hahner - Team Lead. 
