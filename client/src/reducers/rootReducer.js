import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import rootFormReducer from './rootFormReducer';
import appReducer from './appReducer';

export default combineReducers({
  router: routerReducer,
  deep: rootFormReducer,
  appUi: appReducer,
});
