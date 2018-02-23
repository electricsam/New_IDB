import React from 'react';
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import createHistory from 'history/createBrowserHistory';
import {routerMiddleware} from 'react-router-redux';

import rootReducer from './reducers/rootReducer';
import rootSaga from './sagas/rootSaga';

export const history = createHistory();
const sagaMiddleware = createSagaMiddleware();
const routerMidware = routerMiddleware(history);

// TODO: before production remove logger
const middleware = applyMiddleware(sagaMiddleware, routerMidware, logger);
const store = createStore(rootReducer, middleware);

sagaMiddleware.run(rootSaga);

export default store;

