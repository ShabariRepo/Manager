/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';


class App extends Component {

  // setup firebase config details to main component
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCaMwx4Zeg42_Sbp1c_Kme2ze8sJfg7Ndg',
      authDomain: 'manager-213d9.firebaseapp.com',
      databaseURL: 'https://manager-213d9.firebaseio.com',
      projectId: 'manager-213d9',
      storageBucket: 'manager-213d9.appspot.com',
      messagingSenderId: '467018959925'
    };
    firebase.initializeApp(config);
  }

  render() {
    // first argument is resucers
    // second argument is for any initial state we want to pass to our redux application
      // i.e. pre populate the email and password for authReducer.. 
      // applicable to serverside rendering
    // store enhancer: adding additional functionality to store
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    
    return (
      // give the provider tag an instance of the create store from redux
      <Provider store={store}>
        <View>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

// const styles = StyleSheet.create({
//   // container: {
//   //   flex: 1,
//   //   justifyContent: 'center',
//   //   alignItems: 'center',
//   //   backgroundColor: '#F5FCFF',
//   // },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

export default App;
