var express = require('express');
var app = express();

var bodyParser = require("body-parser");

const port = process.env.PORT || 4000;


// view engine setup 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

// app.use('/', route);


app.get('/', function(req, res) {
	res.sendFile('/index.html');
});

var server = app.listen(port, function() {
    console.log("server at http://  ");	
});
