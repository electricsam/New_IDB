import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import "!file-loader!style-loader!@css-loader!font-awesome/css/font-awesome.css"

import Routes from './Routes';
import store from './store';

const app = document.getElementById('root');

ReactDOM.render(<Provider store={store}>
  <Routes />
</Provider>, app);
