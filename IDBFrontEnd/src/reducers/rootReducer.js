import { combineReducers } from 'redux';

import user from './userReducer';
import tsunami from './tsunamiReducer';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  user,
  tsunami,
  router: routerReducer
});
