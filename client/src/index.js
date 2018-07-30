import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Routes from './Routes';
import store from './store';

const app = document.getElementById('root');

console.log(document.getElementById('root'));
console.log(document.getElementsByTagName('div'));

console.log(document.getElementById('root'));

ReactDOM.render(<Provider store={store}>
  <Routes />
</Provider>, app);
