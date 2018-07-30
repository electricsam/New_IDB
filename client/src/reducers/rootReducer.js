import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import rootFormReducer from './rootFormReducer';
import tsunamiUiReducer from './tsunamiUiReducer';
import earthquakeUiReducer from './earthquakeUiReducer'
import volcanoUiReducer from './volcanoUiReducer';
import appReducer from './appReducer';

export default combineReducers({
  router: routerReducer,
  deep: rootFormReducer,
  tsunamiUi: tsunamiUiReducer,
  earthquakeUi: earthquakeUiReducer,
  volcanoUi: volcanoUiReducer,
  appUi: appReducer,
});
