
import React, { Component } from 'react';
import {
  ActivityIndicator,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardItem, CardBody, Tabs, Tab, Container, Form, Item, Input, Label, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { connect } from 'react-redux';

// Consts and Libs
import { AppStyles, AppSizes, AppColors } from '@theme/';

// Components
import { Spacer } from '@ui/';
import { firebaseConnect, isLoaded } from 'react-redux-firebase'
import { FBLogin, FBLoginManager, FBLoginView } from 'react-native-facebook-login';
const mapStateToProps = ({ firebase: { auth } }) => ({
  auth
})
// Any actions to map to the component?
const mapDispatchToProps = (dispatch) => ({});
@firebaseConnect()
@connect(mapStateToProps, mapDispatchToProps)
export default class Sidebar extends Component {
  static componentName = 'AppLaunch';



  componentDidUpdate = () => {
    console.log(this.props.auth.uid)

    if (isLoaded) {
      
      if (this.props.auth.uid) {
        Actions.main({ type: 'reset' })

      }else{
        Actions.authenticate({ type: 'reset' })
        
      }
    }
    
  }

  render = () => (
    <View style={{flex:1}}>
        <Button light><Text> Light </Text></Button>
      </View>
  );
}
