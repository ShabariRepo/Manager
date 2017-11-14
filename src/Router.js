// one location to tweak all the different routes
// tweak scenes or screens the user can visit in app
import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';


const RouterComponent = () => {
    return (
        // scene style is like a global style object
        // if you do not place initial flag it will show based on order below
        <Router sceneStyle={{ paddingTop: 60 }}>
            <Scene key="auth">
                <Scene key="login" component={LoginForm} title="Please Login" />
            </Scene>
            <Scene key="main">
                <Scene
                    onRight={() => Actions.employeeCreate()}
                    rightTitle="Add"
                    key="employeeList"
                    component={EmployeeList} title="Employees"
                    initial
                />
                <Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee" />
            </Scene>
        </Router>
    );
};

export default RouterComponent;
