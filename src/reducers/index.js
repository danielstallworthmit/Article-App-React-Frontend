import {combineReducers} from 'redux';
import auth from './auth';
import home from './home';
import common from './common';
import settings from './settings';
import article from './article';

const reducer = combineReducers({
    auth,
    common,
    home,
    settings,
    article
});

export default reducer;