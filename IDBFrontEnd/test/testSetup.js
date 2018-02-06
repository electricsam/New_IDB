process.env.NODE_ENV = 'test';

require('babel-register');
require.extensions['css'] = function () {return null;}
require.extensions['png'] = function () {return null;}
require.extensions['jpg'] = function () {return null;}

var jsdom = require('jsdom');
const { JSDOM } = jsdom;

const { document } = (new JSDOM('')).window;
global.document = document;

var exposedProperties = ['window', 'navigator', 'document'];
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property)=> {
  if(typeof global[property] === 'undefined'){
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
})


global.navigator = {
  userAgent: 'node.js'
};

documentRef = document;