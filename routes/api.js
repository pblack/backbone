var express = require('express'),
  expressRest = require('express-rest');

var app = express();
var rest = expressRest(app);

var checks = [{
  firstName: "hamish",
  lastName: "bar",
  email: "foo@bar.com",
  address1: "123 Some Streete",
  city: "Some City",
  state: "MD",
  country: "USA",
  amount: 100.00,
  receivedDate: new Date(),
  checkDate: new Date(),
  items: [{
    donorInfoFromCheck: true,
    name: "",
    email: "",
    address1: '',
    city: "",
    state: "",
    country: "",
    designations: []
  }]
}, {
  firstName: "chocolate",
  lastName: "bar",
  email: "foo@bar.com",
  address1: "123 Some Streete",
  city: "Some City",
  state: "MD",
  country: "USA",
  amount: 100.00,
  receivedDate: new Date(),
  checkDate: new Date(),
}, {
  firstName: "donut",
  lastName: "king",
  email: "foo@bar.com",
  address1: "123 Some Streete",
  city: "Some City",
  state: "MD",
  country: "USA",
  amount: 100.00,
  receivedDate: new Date(),
  checkDate: new Date(),
}];

rest.get('/api/checks', function(req, rest) {
  rest.ok(checks);
});

rest.get('/api/checks/:id', function(req, rest) {
  var record = checks[req.params.id];
  if (record) rest.ok(record);
  else rest.notFound();
});

rest.put('/api/checks/:id', function(req, rest) {
  checks[req.params.id] = req.body;
  return rest.accepted('/api/checks/' + encodeURI(req.params.id));
});

rest.post('/api/checks', function(req, rest) {
  checks.push(req.body);
  rest.created('/api/checks/' + (checks.length - 1));
});

rest.delete('/api/checks/:id', function(req, rest) {
  delete checks[req.params.id];
  rest.gone();
})
module.exports = app;