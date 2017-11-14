import { EMPLOYEES_FETCH_SUCCESS } from '../actions/types';

const INITIAN_STATE = {};

export default (state = INITIAN_STATE, action) => {
    switch (action.type) {
        case EMPLOYEES_FETCH_SUCCESS:
            return action.payload;
        default:
            return state;
    }
};
