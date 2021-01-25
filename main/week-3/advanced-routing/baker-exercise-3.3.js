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
app.get("/:productId", function(req, res){
  var productId = parseInt(req.params.productId, 10);

  res.render("index", {
    productId: productId
  });
});


http.createServer(app).listen(3001, function() {
  console.log("Application started and listening on port %s", 3001);
});
