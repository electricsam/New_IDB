process.env.NODE_ENV = 'test';

// require('babel-register')();
var React = require('react')
require('babel-polyfill');
// require.extensions['css'] = function () {return null;};
// require.extensions['png'] = function () {return null;};
// require.extensions['jpg'] = function () {return null;};
//
// const hook = require('css-modules-require-hook');
//
// var jsdom = require('jsdom');
// const { JSDOM } = jsdom;
//
// const { document } = (new JSDOM('')).window;
// global.document = document;
//
// var exposedProperties = ['window', 'navigator', 'document'];
// global.window = document.defaultView;
// Object.keys(document.defaultView).forEach((property)=> {
//   if(typeof global[property] === 'undefined'){
//     exposedProperties.push(property);
//     global[property] = document.defaultView[property];
//   }
// });
//
// //this allows enzyme to reference generated classNames from css modules
// hook({
//   extensions: ['.css'],
//   generateScopedName: '[name]__[local]'
// });
//
//
// global.navigator = {
//   userAgent: 'node.js'
// };
//
// documentRef = document;

// require('babel-register')();
//
// var jsdom = require('jsdom').jsdom;
//
// var exposedProperties = ['window', 'navigator', 'document'];
// require('babel-polyfill');
// require.extensions['css'] = function () {return null;};
// require.extensions['png'] = function () {return null;};
// require.extensions['jpg'] = function () {return null;};
//
//
// global.document = jsdom('');
// global.window = document.defaultView;
// Object.keys(document.defaultView).forEach((property) => {
//   if (typeof global[property] === 'undefined') {
//     exposedProperties.push(property);
//     global[property] = document.defaultView[property];
//   }
// });
//
// global.navigator = {
//   userAgent: 'node.js'
// };
//
// documentRef = document;


const { JSDOM } = require('jsdom');

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src)
      .filter(prop => typeof target[prop] === 'undefined')
      .reduce((result, prop) => ({
        ...result,
        [prop]: Object.getOwnPropertyDescriptor(src, prop),
      }), {});
  Object.defineProperties(target, props);
}

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};
copyProps(window, global);