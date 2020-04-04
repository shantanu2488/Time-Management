
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
} from 'react-native';
import {Provider} from 'react-redux';
import persist from './src/config/store';
import Main from './src/Main';
import {PersistGate} from 'redux-persist/integration/react';

const persistStore = persist();

export default class App extends Component {
  render() { 
    return (
      <Provider store={persistStore.store}>
        <PersistGate loading={null} persistor={persistStore.persistor}>
      <Main />
      </PersistGate>
      </Provider>
    );
  }
}


