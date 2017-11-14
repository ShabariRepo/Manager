import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import { EMPLOYEE_CREATE, EMPLOYEE_UPDATE } from './types';

export const employeeUpdate = ({ prop, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    };
};

export const employeeCreate = ({ name, phone, shift }) => {
    // get access to current user that is authenticated
    const { currentUser } = firebase.auth();

    // to get rid of error message for not using dispatch
    // error thrown because it expects an object return promise
    // but were going to pose or pretend this returns something
    // also need to dispatch an action to reset the form
    return (dispatch) => {
        // find a key of users then key of userid then employee key
        // use es6 interpolation with back ticks and for the uid
        // the type reset will make sure the redirect is the first page of view stack
            // no back button
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .push({ name, phone, shift })
            .then(() => {
                dispatch({ type: EMPLOYEE_CREATE });
                Actions.employeeList({ type: 'reset' });
            });
    };
};
