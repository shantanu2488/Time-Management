import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image
} from "react-native";

//library imports
import { Icon, Button, Container, Header, Content, Left } from 'native-base'
import { Calendar } from "react-native-calendars";

class HomeScreen extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Icon name='menu' onPress={() =>
              this.props.navigation.navigate('DrawerOpen')} />
          </Left>
        </Header>
        <Content style={styles.text} >
          <Text>Home Screen</Text>
        </Content>

      </Container>
      
    );
  }

}

export default HomeScreen;


const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  text: {
    textAlign: 'center',
  }
}
)