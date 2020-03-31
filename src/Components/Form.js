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
    TouchableOpacity
} from 'react-native';

export default class Form extends Component {
   
    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.inputbox}
                    placeholder='Email'
                    placeholderTextColor='black'/>
                <TextInput style={styles.inputbox}
                    placeholder='Password'
                    secureTextEntry={true}
                    placeholderTextColor='black'/>
           
           <TouchableOpacity style={styles.button} >
            <Text style={styles.logintext}>{this.props.type}</Text>

           </TouchableOpacity>
           
           
            </View>

        )

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logotext: {
        marginVertical: 15,
        fontSize: 20,
        color: '#fff',
    },
    inputbox: {
        width: 300,
        backgroundColor: '#fff',
        borderRadius: 25,
        paddingHorizontal: 16,
        marginVertical:10,
      },
        logintext:{
            fontSize:16,
            fontWeight:'700',
            color:'black',
            textAlign:'center',
            paddingVertical:12,
        },
        button:{
            width:300,
            backgroundColor:'#fff',
            borderRadius: 25,
            marginVertical: 10,

        }      



});