/*
============================================
; Title:  exercise 3.3
; Author: tiffany Baker
; Date:   1/27/2021
; Modified By: Tiffany Baker
; Description: a exercise displaying api usage.
;===========================================
*/

/*
 Expected output:
 FirstName LastName
 <AssignmentName>
 <Today's Date>


requesting and returning a object

*/

//START

// calling
var express = require("express");
var http = require("http");



var app = express();

app.get("/bear/:model", function(req, res) {

  var model = parseInt(req.params.model, 10);

  res.json({

    type: "polar",
    color: "blue",
    model: model

  });

});

http.createServer(app).listen(3000, function() {
  console.log("Application started and listening on port %s", 3000);
});

//end
