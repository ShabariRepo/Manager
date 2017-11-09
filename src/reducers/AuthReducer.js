// one reducer responsible for all things authentication
import { 
    EMAIL_CHANGED, 
    LOGIN_USER, 
    LOGIN_USER_FAILED, 
    LOGIN_USER_SUCCESS, 
    PASSWORD_CHANGED 
} from '../actions/types';

// initial state for reducer
// prevent returning undefined in the default
const INITIAL_STATE = { email: '', password: '', user: null, error: '', loading: false };

export default (state = INITIAL_STATE, action) => {
    // console log action here if you want to check the actions being fired
    switch (action.type) {
        case EMAIL_CHANGED:
            // if this state already has an email property (above empty)
            // then override the email
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload };
        case LOGIN_USER_FAILED:
            return { ...state, error: 'Authentication Failed', password: '', loading: false };
        case LOGIN_USER:
            return { ...state, loading: true, error: '' };
        default:
            return state;
    }
};
