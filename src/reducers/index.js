import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';

export default combineReducers({
    // the auth piece of state is produced by our authReducer
    auth: AuthReducer,
    employeeForm: EmployeeFormReducer
});
