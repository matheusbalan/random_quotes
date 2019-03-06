var request = require('request');
var http = require('http');

http.createServer(function (req, res) {
  request('https://api.kanye.rest', function (error, response, body) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  
  if (error) 
      res.end("Couldn't connect to https://api.kanye.rest");
  else {
      res.write("<h1 style='text-align: center'>Random Quote</h1>");
      res.write("<h5 style='text-align: center; opacity: 0.5'>Refresh for a new quote</h5><p />");
      res.write("<h3>We got this following message to you from https://api.kayne.rest</h3>");
      res.end(JSON.parse(body).quote);
  }
  });
}).listen(3000);