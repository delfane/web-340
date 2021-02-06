/*

============================================
; Title:  exercise-5.3
; Author: tiffany baker
; Date:   2/5/2021
; Modified By: Tiffany Baker
; Description: a express exercise displaying a pug webpage in local host.
;===========================================

*/



// calling
var express = require("express");
var http = require("http");
var pug = require("pug");
var path = require("path");

//app setup

var app = express();

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "pug");


//routing app

app.get("/", function(req, res) {

    res.render("index", {

        message: "Welcome to my Pug based Homepage!"

    });

});

http.createServer(app).listen(3000, function() {

    console.log("Application started on port 3000!");

});

