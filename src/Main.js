import React , { Component } from 'react';
import {
  StyleSheet,
  } from 'react-native';

import {connect} from 'react-redux';
import Routes from './components/Routes';

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

mapStateToProps = state => ({
  authData: state.authReducer.authData
})

export default connect(mapStateToProps, null)(Main)

