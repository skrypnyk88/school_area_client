var express = require('express');
var path = require('path');

var app = express();

var port = process.env.PORT || 1111;
var publicPath = __dirname;

app.use(express.static(publicPath));

app.use(function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, function() {
  console.log('Server running on port ' + port);
});
