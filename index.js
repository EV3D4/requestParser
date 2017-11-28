var express = require('express');
var app = express();
var os = require("os");
var ip = require("ip");

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 5000;

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

app.get('/about', function(req, res) {
  // ejs render automatically looks in the views folder

  res.render('index');
});


app.get(/./, function (req, res) {

	var id = req.headers.host

  var returnObject = {"ipaddress": ip.address(), "language": req.headers['accept-language'].slice(0,6), "software" : process.platform}


  res.writeHead(200, {
    'Content-Type': 'application/json'
  });
  res.end(JSON.stringify(returnObject));

});

app.listen(port, function() {
  console.log('Our app is running on http://localhost:' + port);
});
