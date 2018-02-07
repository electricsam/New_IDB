import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';


import Routes from './Routes';
import store from './store';

const app = document.createElement('div');
app.setAttribute('id', 'app');
document.body.appendChild(app);

ReactDOM.render(<Provider store={store}>
  <Routes />
</Provider>, app);

