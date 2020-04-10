import { combineReducers } from 'redux';

import country from './country';


const appReducer = combineReducers({
    country,
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default rootReducer;
