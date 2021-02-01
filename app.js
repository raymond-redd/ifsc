//Dependencies
const express = require('express');
const ejs = require('ejs');


//Initialise app
const app = express();

//Set port and listen 
const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`server started on port 3000`);
});

//Middlewares
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({extended: true}));

//Import routes
const homeRoute = require('./routes/homeRoutes');
const searchRoute = require('./routes/homeRoutes');

//All get routes
app.use(homeRoute);
app.use(searchRoute)

