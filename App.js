
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

//import Header from './components/Header';
//import Calendar from './components/Calendar';
//import Hamburger from './components/Hamburger';
import Routes from './components/Routes';
import Signup from './components/Signup';
import Login from './components/Login';
//import { Router } from 'react-native-router-flux';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        
        <Routes/>
      </View>

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
