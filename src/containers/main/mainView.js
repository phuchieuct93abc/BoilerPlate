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
import { Drawer, Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base'; import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { firebaseConnect, isLoaded } from 'react-redux-firebase'
import EditableCell from '@components/editableCell'
import Keyboard from '@components/keyboard'

import { Col, Row, Grid } from 'react-native-easy-grid';
// Consts and Libs



/* Component ==================================================================== */
@firebaseConnect()
@connect(({ firebase: { auth } }) => ({
  auth

}))
class MainView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      table: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    }

  }
  logout() {
    this.props.firebase.logout();
    Actions.authenticate()

  }
  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => {
    this.drawer._root.open()
  };
  onPress(value, index) {
    this.setState(index)
    console.log(value, index)
  }
  generateColumn(item, rowIndex) {
    return item.map((item, columnIndex) => (
      <Col ><EditableCell value={item} index={{ rowIndex, columnIndex }} onPress={this.onPress.bind(this)} /></Col>
    )





    )
  }
  generateRow(item) {
    return this.state.table.map((item, rowIndex) => {
      return (<Row>{this.generateColumn(item, rowIndex)}</Row>)

    })


  }
  generateTable() {
    return (
      <Grid>
        {this.generateRow(this.state.table)}
      </Grid>)
  }
  onKeyboardPress(value) {
    var table = this.state.table;
    table[this.state.rowIndex][this.state.columnIndex] = value
    this.setState({table})
    console.log(value)
  }
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
          <Text>AAAAAAAAAA</Text>
          {this.generateTable()}
          <Keyboard onPress={this.onKeyboardPress.bind(this)} />
        </Content>

      </Container>
    </Drawer>


  );
}

/* Export Component ==================================================================== */

export default MainView;
