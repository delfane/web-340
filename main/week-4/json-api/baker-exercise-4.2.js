/*
============================================
; Title:  exercise 3.3
; Author: tiffany Baker
; Date:   1/27/2021
; Modified By: Tiffany Baker
; Description: a exercise displaying api usage.
;===========================================
*/

//header display
const header = require('../baker-header.js');
console.log(header.display("Tiffany", "Baker", "exercise-4.2"));

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

app.get("/customer/:id", function(req, res) {

  var id = parseInt(req.params.id, 10);

  res.json({

    firstName: "Jamie",
    lastName: "steve",
    employeeId: "184932"

  });
});

http.createServer(app).listen(3000, function() {
  console.log("Application started and listening on port %s", 3000);
});

//end
