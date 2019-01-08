// require express and set the view engine as ejs

var express = require('express');
var app = express();
app.set('view engine', 'ejs');

// Define the port number

var port = process.env.PORT || 3000;

// render the home page and the bye page as a response to your get requests

app.get("/", function(req, res){
    res.render("home");
});

app.get("/bye", function(req, res){
  res.render("bye"); 
});

// listen on the port! running a listen loop that never ends. That's how it runs as a server.

app.listen(port, function(){
     console.log("server is running on port " + port);
});