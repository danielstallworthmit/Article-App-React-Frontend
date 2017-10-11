import {applyMiddleware, createStore} from 'redux';
import {promiseMiddleware} from './middleware';
import reducer from './reducers/';

const store = createStore(reducer, applyMiddleware(promiseMiddleware));

export default store;