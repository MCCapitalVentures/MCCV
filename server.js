var express = require('express');
var path = require('path');
var app = express();

// heroku sets port or we use port 5000
var port = 5000;

app.use(express.static(__dirname + "/public"));

// routes

// root
app.get("/", function(req, res){
	res.render("index.html");
});

// starts server
app.listen(port, function(){
	console.log("Server is running");
});
