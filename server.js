var Express = require ('express');
var app = Express();

app.use(Express.static(__dirname+"/public"));

// app.get("/", function(req, res, next) {
//   res.sendFile("./views/index.html", {
//     root: __dirname
//   });
// });

app.engine('jade', require('jade').__express);
app.set("view engine", "jade");

app.get("/", function(req, res, next) {
  res.render('index', {header: "Jade rocks!", destination: 'far'});
});

var port = "8080";
var server = app.listen(port);
console.log('Example app listening at http://127.0.0.1:%s', port);