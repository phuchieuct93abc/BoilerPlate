/**
 * Launch Screen
 *  - Shows a nice loading screen whilst:
 *    - Preloading any specified app content
 *    - Checking if user is logged in, and redirects from there
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React, { Component } from 'react';
import {
  View

} from 'react-native';
import { Drawer,Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { firebaseConnect, isLoaded } from 'react-redux-firebase'

// Consts and Libs



/* Component ==================================================================== */
@firebaseConnect()
@connect(({ firebase: { auth } }) => ({
  auth

}))
class MainView extends Component {
  logout() {
    this.props.firebase.logout();
    Actions.authenticate()

  } 
  closeDrawer = () => {
      this.drawer._root.close()
    };
    openDrawer = () => {
      console.log("open")
      this.drawer._root.open()
    };
 
  render = () => (

    <Drawer
      ref={(ref) => { this.drawer = ref; }}
      content={<Text>{this.props.auth.email}</Text>}
      onClose={() => this.closeDrawer()} >
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={this.openDrawer.bind(this)}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content>
           
        </Content>
       
      </Container>
    </Drawer> 
 
  
  );
}

/* Export Component ==================================================================== */

export default MainView;
