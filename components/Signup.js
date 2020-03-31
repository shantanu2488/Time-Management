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

import { Actions } from 'react-native-router-flux';

import Logo from './Logo';
import Form from './Form';

export default class Login extends Component {
   Login(){
     Actions.Login()
   }
  
  render (){
       
    
    return(
           <View style={styles.container}>
               <Logo/>
              <Form type="Signup"/>
              <View style={styles.signuptextCont}>
                  <Text style={styles.signuptext}>Already have a account ? </Text>
                  <TouchableOpacity onPress={this.Login}><Text style={styles.signupbutton}>Sign in</Text></TouchableOpacity>
              </View>
           </View>
       )

    }

}

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#777',
      alignItems:'center',
      justifyContent:'flex-end',
      },
      logintext:{
        fontSize:30,
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
      }

});