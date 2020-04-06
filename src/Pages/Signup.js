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

import Logo from '/home/shantanu/VT/src/Components/Logo';
import Form from '/home/shantanu/VT/src/Components/Form';

class Signup extends Component {
  
  goBack(){
    Actions.pop();
  }

 
  render (){
      return(
           <View style={styles.container}>
               <Logo/>
              <Form type="Signup"/>
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

export default reduxForm({
  form: "register"
}) (Signup)
