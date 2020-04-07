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

import Logo from '/home/shantanu/VT/src/components/Logo';


export default class Login extends Component {

  state = {Email: "", Password: "" }
  
  checklogin(){
    const {Email, Password} = this.state
    console.log(Email,Password)
    if(Email== 'shantanu' && Password=='shantanu'){
      console.log('Login works')
    }

  }
  
  signup(){
    Actions.signup();
  }

   render() {
    return (
      <View style={styles.container}>
        <Logo />
        <TextInput style={styles.inputtext} placeholder="Email" underlineColorAndroid="#fff" 
        onChangeText={text => this.setState({Email: text})}/>
        <TextInput style={styles.inputtext} placeholder="Password" underlineColorAndroid="#fff" secureTextEntry={true}
        onChangeText={text => this.setState({Password: text})}/>
        <TouchableOpacity style={styles.button} onPress={_=> this.checklogin()} >
            <Text style={styles.logintext}>Login</Text>

           </TouchableOpacity>
       
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
    justifyContent: 'flex-end',
    
  },
  logintext: {
    fontSize: 20,
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
  },
  inputtext:{
    margin: 20,
    fontSize: 20,
    color:'#fff',
    paddingVertical: 10,
  },
  button:{
    width:200,
    backgroundColor:'black',
    borderRadius: 10,
    alignSelf: 'center',
    alignItems:'center'

  
  }

});