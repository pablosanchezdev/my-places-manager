var express = require('express');
var path = require('path');
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static(path.resolve(__dirname, 'www')));
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
  console.log('listening to Port ', app.get('port'));
});