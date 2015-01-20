var Express = require ('express');
var app = Express();

app.use("/a", function(req, res, next) {
  console.log('route a');
  res.sendStatus(200);
});

app.use('/b', function(req, res, next) {
  console.log('route b');
  var data = {
    message: 'route b, ok'
  };

  res.status(200).json(data);
});

app.use('/c', function(req, res, next) {
  console.log('route c');
  res.set('Makersquare-Header', Date.now());
  res.redirect(301, 'http://makersquare.com');
});

app.use('/d', function(req, res, next) {
  console.log('route d');
  console.log(req.query.name);
  res.status(200).json({name: req.query.name});
});

var port = "8080";
var server = app.listen(port);
console.log('Example app listening at http://127.0.0.1:%s', port);