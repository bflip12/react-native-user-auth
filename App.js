import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import { Header } from './src/components/common';
import LoginForm from './src/components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyABX-dcyD68DHrhA-VsX5X9SZ-1mCQejC0',
      authDomain: 'user-auth-281bc.firebaseapp.com',
      databaseURL: 'https://user-auth-281bc.firebaseio.com',
      projectId: 'user-auth-281bc',
      storageBucket: 'user-auth-281bc.appspot.com',
      messagingSenderId: '116631751244'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

export default App;
