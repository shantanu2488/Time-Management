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
} from 'react-native';


export default class logo extends Component {
    render(){
        return(
            <View style={styles.container}>
            <Image source={require('/home/shantanu/VT/src/Images/1.png')} style={styles.image}
            />
            <Text style={styles.logotext}> Health Management</Text>

            </View>

            )

    }
}

const styles = StyleSheet.create({
    container: {
      flexGrow:1,
      paddingTop:10,
      alignItems:'center',
      justifyContent:'center',
      alignItems:'center',
      },
      logotext:{
          marginVertical:15,
          fontSize:25,
          color:'#fff',
      },
      image:{
          width:200,
          height:200,
      },
      


});