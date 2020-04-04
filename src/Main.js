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

import {connect} from 'react-redux';
import Routes from './Components/Routes';

class Main extends Component {
  
 render (){
      return(
        

            <Routes />
        )

    }

}

const styles = StyleSheet.create({
    container: {
      flex:1,
           }
});

export default connect(null, null)(Main)
