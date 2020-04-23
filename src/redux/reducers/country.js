import {
    REDUX_FIRST_CALL_CHECK,
    GLOBAL_LATEST_COUNT,
    GLOBAL_COUNTRY_COUNT
} from '../types';

const initial_state = {
    redux_connected:false,
    global_count_Data:null,
    country_count_data:null
};

export default (state = initial_state, action) => {
    switch (action.type) {
        case REDUX_FIRST_CALL_CHECK:
            return {
                ...state,
                redux_connected: action.payload
            };
        case GLOBAL_LATEST_COUNT:
            return {
                ...state,
                global_count_Data: action.payload
            };
        case GLOBAL_COUNTRY_COUNT:
            return {
                ...state,
                country_count_data: action.payload
            };
        default:
            return state;
    }
};
