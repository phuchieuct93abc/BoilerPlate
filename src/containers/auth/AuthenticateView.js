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
import { Card, CardItem, CardBody, Tabs, Tab, Container, Form, Item, Input, Label, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { connect } from 'react-redux';

// Consts and Libs
import { AppStyles, AppSizes, AppColors } from '@theme/';

// Components
import { Spacer } from '@ui/';
import { firebaseConnect } from 'react-redux-firebase'

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
@firebaseConnect()
class Authenticate extends Component {
  static componentName = 'Authenticate';
  constructor(props) {
    super(props);

  }
  login() {

    this.props.firebase.login({

      email: this.state.username,
      password: this.state.password

    }).then(Actions.main).catch(() => {

      ToastAndroid.show('Login failed', ToastAndroid.SHORT);

    })
  }
signup(){

 this.props.firebase.createUser({

      email: this.state.signUpUsername,
      password: this.state.signUpPassword

    }).then(Actions.main).catch(() => {

      ToastAndroid.show('Signup failed', ToastAndroid.SHORT);

    })


}
  render = () => (
    <Container>
      <Tabs>
        <Tab heading="Login">
          <Content>


            <Form>
              <Item floatingLabel>
                <Label>Username</Label>
                <Input onChangeText={(username) => this.setState({ username })} />
              </Item>
              <Item floatingLabel last>
                <Label>Password</Label>
                <Input secureTextEntry={true}
                  onChangeText={(password) => this.setState({ password })} />
              </Item>

              <Button block success onPress={this.login.bind(this)}>
                <Text>Success</Text>
              </Button>

            </Form>


          </Content>


        </Tab>
        <Tab heading="Signup">
         
                <Form>
                  <Item floatingLabel>
                    <Label>Username</Label>
                    <Input onChangeText={(signUpUsername) => this.setState({ signUpUsername })} />
                  </Item>
                  <Item floatingLabel last>
                    <Label>Password</Label>
                    <Input secureTextEntry={true}
                      onChangeText={(signUpPassword) => this.setState({ signUpPassword })} />
                  </Item>

                  <Button block success onPress={this.signup.bind(this)}>
                    <Text>Success</Text>
                  </Button>

                </Form>
             
        </Tab>

      </Tabs>




    </Container>
  )
}

/* Export Component ==================================================================== */
export default Authenticate;
