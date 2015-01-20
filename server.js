var Express = require ('express');
var app = Express();

var routeHandlerA = function(req, res, next) {
  console.log("Route A");
  next();
};

var routeHandlerB = function(req, res, next) {
  console.log("Route B");
  res.sendStatus(200);
};

var rootHandlers = [routeHandlerA, routeHandlerB];

app.get('/', rootHandlers);

var port = "8080";
var server = app.listen(port);
console.log('Example app listening at http://127.0.0.1:%s', port);