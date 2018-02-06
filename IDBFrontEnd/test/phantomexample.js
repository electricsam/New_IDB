var page = require('webpage').create();
var expect = require('chai').expect;

page.open('http://localhost:8080', function(status) {
  console.log("Status: " + status);
  phantom.exit();
});
