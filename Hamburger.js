
import React, { Component } from "react";

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image
} from "react-native";

import { Container, Content, Icon, Header, Body } from 'native-base'
import { DrawerNavigator, StackNavigator, DrawerItems, SafeAreaView } from 'react-navigation'

//custom files 
//import AppStackNavigator from './AppStackNavigator'
//import SettingsScreen from './SettingsScreen'
//import HomeScreen from "./HomeScreen";


 /**export default class App extends Component {

  render() {
    return (
      <MyApp />
    )
  }
}**/

const Hamburger = DrawerNavigator({

  // For each screen that you can navigate to, create a new entry like this:
  Home: {
    screen: HomeScreen,
  },
  Settings: {
    screen: SettingsScreen
  }
});


const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  drawerHeader: {
    height: 200,
    backgroundColor: 'white'
  },
  drawerImage: {
    height: 150,
    width: 150,
    borderRadius: 75
  }

})

export default Hamburger;