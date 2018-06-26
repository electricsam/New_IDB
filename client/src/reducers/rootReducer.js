import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import rootFormReducer from './rootFormReducer';
import tsunamiUiReducer from './tsunamiUiReducer';

export default combineReducers({
  router: routerReducer,
  deep: rootFormReducer,
  tsunamiUi: tsunamiUiReducer,
});
