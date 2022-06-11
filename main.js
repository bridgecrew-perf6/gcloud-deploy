var express = require('express');
var app = express();
var fs = require("fs");

app.get('/get-user', function (req, res) {
   fs.readFile( __dirname + "/" + "user.json", 'utf8', function (err, data) {
      res.end( data );
   });
})

app.get('/users', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      res.end( data );
   });
})

const PORT = process.env.PORT || 8080; 

var server = app.listen(PORT, function () {
   var port = server.address().port
   console.log("Example app listening at port: %s", port)
})