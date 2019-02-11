var request = require('request');

request('https://sytantris.github.io/http-examples/', function(err, response, body) {
  if (err) throw err;
  console.log('Response Status Code:', response.statusCode);
});

// A callback that takes three parameters: err (any error that is returned), response (the HTTP response headers), and body (the HTTP response body)