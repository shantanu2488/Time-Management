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
  TouchableOpacity,
} from 'react-native';

import { Actions } from 'react-native-router-flux';

import Logo from './Logo';
import Form from './Form';
import Signup from './Signup';

export default class Login extends Component {

  signup(){
    Actions.signup();
  }

   render() {
    return (
      <View style={styles.container}>
        <Logo />
        <Form type="Login"/>
        <View style={styles.signuptextCont}>
          <Text style={styles.signuptext}>Don't have an account yet? </Text>
          <TouchableOpacity onPress={this.signup}><Text style={styles.signupbutton}>Signup</Text></TouchableOpacity>
        </View>
      </View>
    )

  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#777',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  logintext: {
    fontSize: 30,
    color: '#fff',
  },
  signuptextCont: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  signuptext: {
    color: '#fff',
    fontSize: 16,
  },
  signupbutton: {
    color: 'black',
    fontSize: 16,
    fontWeight: '900',
  }

});