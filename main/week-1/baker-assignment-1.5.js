/*
============================================
; Title:  assignment 1.5
; Author: Node.js Server Example creator unknown
; Date:   1/6/2021
; Modified By: Tiffany Baker
; Description: a node exercise displaying a message in local host.
;===========================================
*/

//header display
const header = require('../baker-header.js');
console.log(header.display("Tiffany", "Baker", "Assignment 1.5"));

/*
 Expected output:
 FirstName LastName
 <AssignmentName>
 <Today's Date>


 -- DISPLAYING MESSAGE --
    Yes! It's finally finished.

*/

//START

//function creates a process to run a message on local host 8080
var http = require("http");

function processRequest(req, res) {

var body = "Yes! It's finally finished.";

    var contentLength = body.length;

    res.writeHead(200, {

        'Content-Length': contentLength,

        'Content-Type': 'text/plain'

    });

    res.end(body);

}

var s = http.createServer(processRequest);

s.listen(8080);

//END
