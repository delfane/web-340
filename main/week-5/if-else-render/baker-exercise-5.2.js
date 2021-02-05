/*

============================================
; Title:  exercise-5.2
; Author: tiffany baker
; Date:   2/4/2021
; Modified By: Tiffany Baker
; Description: a express exercise displaying a if else render in local host.
;===========================================

*/



// calling
var express = require("express");
var http = require("http");
var path = require("path");

//app setup

var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

//array for list

var list = [

  "Jo Ann",
  "Micheal",
  "Nick",
  "Mary"

];

//routing app

app.get("/", function(req, res) {

    res.render("index", {

        names: list

    })

});

http.createServer(app).listen(3000, function() {

    console.log("Application started on port 3000!");

});

