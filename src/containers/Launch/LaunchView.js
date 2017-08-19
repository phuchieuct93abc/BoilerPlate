
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
class AppLaunch extends Component {
  static componentName = 'AppLaunch';



  componentDidUpdate = () => {
    console.log(this.props.auth.uid)

    if (isLoaded) {
      if (this.props.auth.uid) {
        Actions.main({ type: 'reset' })

      }
    }
    // // Show status bar on app launch
    // StatusBar.setHidden(false, true);

    // // Preload content here
    // Promise.all([
    //   this.props.getMeals(),
    //   this.props.getRecipes(),
    // ]).then(() => {
    //   // // Once we've preloaded basic content,
    //   // // - Try to authenticate based on existing token
    //   // this.props.login()
    //   //   // Logged in, show index screen
    //   //   .then(() => Actions.app({ type: 'reset' }))
    //   //   // Not Logged in, show Login screen
    //   //   .catch(() => Actions.authenticate({ type: 'reset' }));
    // }).catch(err => Alert.alert(err.message));
  }

  render = () => (
    <View>

      <ActivityIndicator
        animating
        size={'large'}
        color={'#C1C5C8'}
      />

    </View>
  );
}

/* Export Component ==================================================================== */
export default AppLaunch;
