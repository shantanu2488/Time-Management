
import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const Header = (props) => {
  return (
    <View style={styles.header}>
<Text style={styles.text}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
      text:{
      color:'#fff',
      fontSize:20,
      textAlign:'center',
    },
    header:{
        height:60,
        padding:15,
        backgroundColor:'#512da8',
    }

});


export default Header;