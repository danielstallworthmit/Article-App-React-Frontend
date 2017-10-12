import {combineReducers} from 'redux';
import auth from './auth';
import home from './home';
import common from './common';
import settings from './settings';

const reducer = combineReducers({
    auth,
    common,
    home,
    settings
});

export default reducer;