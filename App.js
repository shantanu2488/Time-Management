
import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TextInput,
  Image,
} from 'react-native';
import {Provider} from 'react-redux';

import Routes from './src/Components/Routes';
import store from './src/config/store';


export default class App extends Component {
  render() { 
    return (
      <Provider store={store}>
      <Routes />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#777',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,


  },
});
