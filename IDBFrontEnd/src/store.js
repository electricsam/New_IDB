import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';


import  rootReducer from './reducers/rootReducer';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

// TODO: before production remove logger
const middleware = applyMiddleware(sagaMiddleware, logger);
const store = createStore(rootReducer, middleware);

sagaMiddleware.run(rootSaga);

export default store;

