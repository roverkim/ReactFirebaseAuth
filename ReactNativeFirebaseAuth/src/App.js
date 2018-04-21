import firebase from 'firebase';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common';


export default class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
        apiKey: 'AIzaSyAWx4ngIsOt-svl2Y9ldNr6izm3WoLk5nM',
        authDomain: 'reactnativeauth-6cda8.firebaseapp.com',
        databaseURL: 'https://reactnativeauth-6cda8.firebaseio.com',
        projectId: 'reactnativeauth-6cda8',
        storageBucket: 'reactnativeauth-6cda8.appspot.com',
        messagingSenderId: '183673208056'
    });
  }

  render() {
    return (
      <View>
        <Header title='Authentication' />
        <Text>Hello World</Text>
      </View>
    );
  }
}
