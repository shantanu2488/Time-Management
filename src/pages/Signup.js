import React , { Component } from 'react';
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

import { Field, reduxForm } from 'redux-form'
import { Actions } from 'react-native-router-flux';

import Logo from '/home/shantanu/VT/src/components/Logo';


export default class Signup extends Component {
  
  goBack(){
    Actions.pop();
  }

 
  render (){
      return(
           <View style={styles.container}>
               <Logo/>
              <TextInput style={styles.inputtext} placeholder="Email" underlineColorAndroid="#fff"/>
              <TextInput style={styles.inputtext} placeholder="Password" underlineColorAndroid="#fff" secureTextEntry={true}/>
              <TextInput style={styles.inputtext} placeholder="Confirm Password" underlineColorAndroid="#fff" secureTextEntry={true}/>
              <TouchableOpacity style={styles.button} onPress={_=> this.checksignup()} >
            <Text style={styles.logintext}>Sign up</Text>

           </TouchableOpacity>
              
              
              <View style={styles.signuptextCont}>
                  <Text style={styles.signuptext}>Already have a account ? </Text>
                  <TouchableOpacity onPress={this.goBack}><Text style={styles.signupbutton}>Sign in</Text></TouchableOpacity>
              </View>
           </View>
       )

    }

}

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#777',
      justifyContent:'flex-end',
      },
      logintext:{
        fontSize:20,
        color:'#fff',
      },
      signuptextCont:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
      },
      signuptext:{
        color:'#fff',
        fontSize:16,
      },
      signupbutton:{
        color:'black',
        fontSize:16,
        fontWeight:'900',
      },
      inputtext:{
        margin: 20,
        fontSize: 20,
        color:'#fff',
      },
      button:{
          width:200,
          backgroundColor:'black',
          borderRadius: 10,
          alignSelf: 'center',
          alignItems:'center',
      }



});

