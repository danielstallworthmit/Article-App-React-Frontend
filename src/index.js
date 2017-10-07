import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

const defaultState = { appName: 'CONDUIT' };
const reducer = function(state = defaultState, action) {
    switch(action.type) {
        case 'TOGGLE':
            return { ...state, checked: !state.checked };
        default:
            return state;
    }
}
const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
