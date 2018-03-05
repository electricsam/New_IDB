import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import user from './userReducer';
import tsunami from './tsunamiReducer';
import rootFormReducer from './rootFormReducer';

import { createForms } from 'react-redux-form';
const initialState = {
  name: '',
  age: '',
  weight: '',
}

export default combineReducers({
  tsunami,
  router: routerReducer,
  deep: rootFormReducer
  // ...createForms({
  //   user: initialState
  // })
  // forms: rootFormReducer,
});
