/*
============================================
; Title:  exercise-3.2
; Author: Professor Krasso
; Date:   1/24/2021
; Modified By: Tiffany Baker
; Description: a node exercise displaying a message in local host.
;===========================================
*/

//header display
const header = require('../baker-header.js');
console.log(header.display("Tiffany", "Baker", "exercise-3.2"));

/*
 Expected output:
 FirstName LastName
 <AssignmentName>
 <Today's Date>


 -- DISPLAYING MESSAGE --
 displays message to local host

*/

//START


var express = require("express");
var http = require("http");
var path =  require("path");
var logger = require("morgan");

var app = express();

//having express look for files
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));

//creates page and inputs message in the index file
app.get("/", function(req, res){
  res.render("index", {
    message: "Hello! Welcome and salutations!"
  });
});


http.createServer(app).listen(3000, function() {
  console.log("Application started and listening on port %s", 3000);
});


//end
