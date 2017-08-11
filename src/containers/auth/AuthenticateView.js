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
  StyleSheet,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container,Form,Item,Input,Label, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

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
  constructor(props){
super(props);
console.log("Loading ")
var   oldCode = (<View style={[AppStyles.containerCentered, AppStyles.container, styles.background]}>
    <Image
      source={require('../../images/logo.png')}
      style={[styles.logo]}
    />

    <View style={[AppStyles.row, AppStyles.paddingHorizontal]}>
      <View style={[AppStyles.flex1]}>
        <Button
          title={'Login'}
          icon={{ name: 'lock' }}
          onPress={Actions.login}
          backgroundColor={'#CB009E'}
        />
      </View>
    </View>

    <Spacer size={10} />

    <View style={[AppStyles.row, AppStyles.paddingHorizontal]}>
      <View style={[AppStyles.flex1]}>
        <Button
          title={'Sign up'}
          icon={{ name: 'face' }}
          onPress={Actions.signUp}
          backgroundColor={'#CB009E'}
        />
      </View>
    </View>

    <Spacer size={15} />

    <Text p style={[AppStyles.textCenterAligned, styles.whiteText]}>
      - or -
      </Text>

    <Spacer size={10} />

    <View style={[AppStyles.row, AppStyles.paddingHorizontal]}>
      <View style={[AppStyles.flex1]} />
      <View style={[AppStyles.flex2]}>
        <Button
          small
          title={'Skip'}
          onPress={Actions.app}
          raised={false}
          backgroundColor={'rgba(255,255,255,0.2)'}
        />
      </View>
      <View style={[AppStyles.flex1]} />
    </View>

    <Spacer size={40} />
  </View>)
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
         
                    <Button block success onPress={Actions.login}>
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
