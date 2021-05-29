import { createStore, compose, applyMiddleware } from 'redux';
import { apiCallMiddleware } from './middleware';
import rootReducer from './redusers/index';

const middleware = [apiCallMiddleware];
let applyMiddlewareParams = [];

    applyMiddlewareParams = [applyMiddleware(...middleware)];


const store = createStore(rootReducer, compose(...applyMiddlewareParams));

export default store;


