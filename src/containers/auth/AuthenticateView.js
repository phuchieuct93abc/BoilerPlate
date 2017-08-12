/**
 * Authenticate Screen
 *  - Entry screen for all authentication
 *  - User can tap to login, forget password, signup...
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React, { Component } from 'react';
import {
  View,
  Image,
  StyleSheet, ToastAndroid
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Form, Item, Input, Label, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

// Consts and Libs
import { AppStyles, AppSizes, AppColors } from '@theme/';

// Components
import { Spacer } from '@ui/';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  background: {
    backgroundColor: AppColors.brand.primary,
    height: AppSizes.screen.height,
    width: AppSizes.screen.width,
  },
  logo: {
    width: AppSizes.screen.width * 0.85,
    resizeMode: 'contain',
  },
  whiteText: {
    color: '#FFF',
  },
});

/* Component ==================================================================== */
class Authenticate extends Component {
  static componentName = 'Authenticate';
  constructor(props) {
    super(props);

  }
  login() {
     Actions.main() 
    // let Email = "phuchieu@gmail.com";
    // let Password = "hieu1234"
    // this.props.login({ Email, Password }).then(() => {
    //   Actions.main() 

    // }).catch(() => {

    //   ToastAndroid.show('Login failed', ToastAndroid.SHORT);

    // })
  }

  render = () => (
    <Container>
      <Header>
        <Left>
          <Button transparent>
            <Icon name='menu' />
          </Button>
        </Left>
        <Body>
          <Title>Header</Title>
        </Body>
        <Right />
      </Header>
      <Content>

        <Form>
          <Item floatingLabel>
            <Label>Username</Label>
            <Input />
          </Item>
          <Item floatingLabel last>
            <Label>Password</Label>
            <Input />
          </Item>

          <Button block success onPress={this.login.bind(this)}>
            <Text>Success</Text>
          </Button>

        </Form>

      </Content>
      <Footer>
        <FooterTab>
          <Button full>
            <Text>Footer</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  )
}

/* Export Component ==================================================================== */
export default Authenticate;
