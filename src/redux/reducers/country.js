import {
    REDUX_FIRST_CALL_CHECK
} from '../types';

const initial_state = {
    redux_connected:false
};

export default (state = initial_state, action) => {
    switch (action.type) {
        case REDUX_FIRST_CALL_CHECK:
            return {
                ...state,
                redux_connected: action.payload
            };
        default:
            return state;
    }
};
