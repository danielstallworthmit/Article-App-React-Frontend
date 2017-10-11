import {applyMiddleware, createStore} from 'redux';
import {promiseMiddleware, localStorageMiddleware} from './middleware';
import reducer from './reducers/';

const store = createStore(reducer, applyMiddleware(promiseMiddleware, localStorageMiddleware));

export default store;