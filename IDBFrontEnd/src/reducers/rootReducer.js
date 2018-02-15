import { combineReducers } from 'redux';

import user from './userReducer';
import tsunami from './tsunamiReducer';

export default combineReducers({
  user,
  tsunami
});
