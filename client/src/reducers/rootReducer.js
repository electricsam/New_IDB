import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import rootFormReducer from './rootFormReducer';


export default combineReducers({
  router: routerReducer,
  deep: rootFormReducer
});
