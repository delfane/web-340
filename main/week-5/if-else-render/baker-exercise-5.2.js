var express = require("express");

var http = require("http");

var path = require("path");

app = express();

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");

var names = [

  "Jo Ann",

  "Micheal",

  "Nick",

  "Mary"

];

app.get("/", function(req, res) {

    response.render("index", {

        names: names

    })

});

http.createServer(app).listen(3000, function() {

    console.log("Application started on port 3000!");

});

