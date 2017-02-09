var express = require('express');
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('pages/index.ejs');
})

app.get('/parseHeader', function(req, res) {
  var json = JSON.stringify(req.headers);
    console.log(json["user-agent"]);
    //console.log(req.headers.user-agent);
    //console.log(req.headers.accept-language);
    /*res.send({
        "ipaddress": "181.49.66.142",
        "language": "es-419",
        "software": "Macintosh; Intel Mac OS X 10_10_5"
      });*/
      res.send(req.headers);
});

var port = 8000;
app.listen(port, function () {
  console.log('Example app listening on port %s!',port);
})
