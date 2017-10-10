import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './components/Home';
import Login from './components/Login';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux';
import store from './store';

import {BrowserRouter, Route, Switch} from 'react-router-dom';


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path='login' component={Login} />
                <Route path='/' component={App} />
            </Switch>
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
