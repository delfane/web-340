/*
============================================
; Title:  exercise 1.3
; Author: Tiffany Baker
; Date:   1/6/2021
; Modified By: Tiffany Baker
; Description: a node exercise displaying url pieces.
;===========================================
*/

//header display
const header = require('../baker-header.js');
console.log(header.display("Tiffany", "Baker", "exercise 1.3"));

/*
 Expected output:
 FirstName LastName
 <AssignmentName>
 <Today's Date>


 -- DISPLAYING URL DETAILS --
    protocol
    host
    query

*/

// start program

//variable creation
var url =  require("url");

var parsedURL = url.parse("https://www.youtube.com/results?search_query=nia+long");

//displaying output
console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);

//end program
