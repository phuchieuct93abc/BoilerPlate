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
import { Drawer, Container, Card, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base'; import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { firebaseConnect, isLoaded } from 'react-redux-firebase'
import EditableCell from '@components/editableCell'
import Keyboard from '@components/keyboard'

import { Col, Row, Grid } from 'react-native-easy-grid';
import { solveSudoku } from '../../logics'
// Consts and Libs



/* Component ==================================================================== */
@firebaseConnect()
@connect(
  ({ firebase: { auth }, currentSudoku: { data } }) => ({
    auth,
    table: data

  }),
  (dispatch) => (

    {
      update: (data) => {
        dispatch({ data: data, type: "UPDATE_SUDOKU" })
      },
      reset:()=>{
        dispatch({ type: "RESET_SUDOKU" })
      }

    }
  )

)
class MainView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      table: []
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
  }
  generateColumn(item, rowIndex) {
    return item.map((item, columnIndex) => (
      <Col key={rowIndex + "_" + columnIndex}><EditableCell value={item} index={{ rowIndex, columnIndex }} onPress={this.onPress.bind(this)} /></Col>
    )





    )
  }
  generateRow(table) {
    return table.map((item, rowIndex) => {
      return (<Row key={rowIndex}>{this.generateColumn(item, rowIndex)}</Row>)

    })


  }
  generateTable() {
    return (
      <Grid>
        {this.generateRow(this.props.table)}
      </Grid>)
  }
  solve() {
    var self = this;
    var shouldContinue = true;
    solveSudoku({ ...{ data: this.props.table } }, 0, 0, (result) => {
      shouldContinue = false;
      var test = [[], [], [], [], [], [], [], [], []]
      result.data.forEach((row, rowIndex) => {

        row.forEach((column, columnIndex) => {
          test[rowIndex][columnIndex] = column


        })

      })
      self.props.update(test)
    }, () => {
      return shouldContinue;
    }
    )

  }
  onKeyboardPress(value) {
    var currentTable = [...this.props.table]
    currentTable[this.state.rowIndex][this.state.columnIndex] = value
    this.props.update(currentTable)

  }
  reset() { }
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
            <Title>Souduko Solver</Title>

          </Body>
          <Right />
        </Header>
        <Content style={{ padding: 10 }}>
          <Card>
            {this.generateTable()}
          </Card>
          <Keyboard onPress={this.onKeyboardPress.bind(this)} />
          <Grid>
            <Col><Button rounded block onPress={this.solve.bind(this)} ><Text>Solve</Text></Button>
            </Col>
            <Col><Button transparent block onPress={this.reset.bind(this)} ><Text>New</Text></Button>
            </Col>
            <Col>
              <Button transparent block onPress={this.props.reset} ><Text>Reset</Text></Button>
            </Col>

          </Grid>
        </Content>

      </Container>
    </Drawer>


  );
}

/* Export Component ==================================================================== */

export default MainView;
