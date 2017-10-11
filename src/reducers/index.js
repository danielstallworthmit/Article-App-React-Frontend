import {combineReducers} from 'redux';
import auth from './auth';
import home from './home';
import common from './common';

const reducer = combineReducers({
    auth,
    common,
    home
});

export default reducer;