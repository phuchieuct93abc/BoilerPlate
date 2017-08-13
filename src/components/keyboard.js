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
    ToastAndroid, StyleSheet, ActivityIndicator
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
import { TouchableOpacity } from "react-native"
import { Col, Row, Grid } from 'react-native-easy-grid';

/* Styles ==================================================================== */



const style = StyleSheet.create({
    cell: {
        height: 50,
       flex:1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "yellow"
    }


})
export default class Keyboard extends Component {


    generateKeyboard() {
        return [[1, 2, 3], [4, 5, 6], [7, 8, 9]].map((item) => {

            let columns = item.map((buttonValue) =>
                (<Col><TouchableOpacity style={style.cell} onPress={() => { this.props.onPress(buttonValue) }}>

                    <Text>{buttonValue}</Text>
                </TouchableOpacity></Col>)

            )
            return (<Row>
                {columns}
            </Row>)

        })

    }

    render = () => (


 <Grid>
                {this.generateKeyboard()}
            </Grid>

       


            )
}

/* Export Component ==================================================================== */
;
