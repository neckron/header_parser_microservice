var express = require('express');
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('pages/index.ejs');
})

app.get('/parseHeader', function(req, res) {
  var json = JSON.stringify(req.headers);
    res.send({
        "ipaddress": req.headers['host'],
        "language": processLanguage(req.headers['accept-language']),
        "software": processAgent(req.headers['user-agent']),
      });
});

function processLanguage(lang){
  return lang.split(',')[0];
}

function processAgent(agent){
  var fi =  agent.indexOf('(');
  var ei =  agent.indexOf(')');
  return agent.substring(fi+1,ei);
}

var port = 8000;
app.listen(port, function () {
  console.log('Example app listening on port %s!',port);
})
