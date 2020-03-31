import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

import { Container, Content, Icon, Button, Header, Left } from 'native-base'
//import CustomHeader from './Components/CustomHeader'

class SettingsScreen extends Component {
    render() {
        return (

            <Container>
                
                <Header>
                    <Left>
                     <Icon name='menu' onPress={() =>
                     this.props.navigation.navigate('DrawerOpen')} />   
                    </Left>
                </Header>


                <Content style={styles.text}>
                    <Text>Settings Screen</Text>
                </Content>
            </Container>
        );
    }

}

export default SettingsScreen;

const styles = StyleSheet.create({
    icon: {
        height: 24,
        width: 24
    },
    text:{
        textAlign:'center',
    }
})