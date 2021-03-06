process.env.NODE_ENV = 'test';

// require('babel-register')();
// require.extensions['png'] = function () {return null;};
// require.extensions['jpg'] = function () {return null;};
//
var React = require('react')
require('babel-polyfill');
require.extensions['css'] = function () {return null;};

const hook = require('css-modules-require-hook');

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

hook({
      extensions: ['.css'],
  generateScopedName: '[name]__[local]'
});

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};
copyProps(window, global);