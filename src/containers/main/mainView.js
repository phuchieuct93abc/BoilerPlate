
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
import Table from "../../components/table"
import Sidebar from "./sidebar"
import DrawerView from '@containers/ui/DrawerContainer';


/* Component ==================================================================== */
@firebaseConnect()
@connect(
  ({ firebase: { auth }, currentSudoku: { data } }) => ({
    auth,
    table: data

  }),
  (dispatch) => (

    {
      new: () => {
        dispatch({ type: "NEW_SUDOKU" })

      },
      set: (data) => {
        dispatch({ data: data, type: "SET_SUDOKU" })

      },
      update: (data) => {
        dispatch({ data: data, type: "UPDATE_SUDOKU" })
      },
      reset: () => {
        dispatch({ type: "RESET_SUDOKU" })
      }

    }
  )

)
export default class MainView extends Component {
  constructor(props) {
    super(props)
    this.isShowKeyboard = this.isShowKeyboard.bind(this)
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
  onPress(index) {
    this.setState(index)
  }

  solve() {
    var self = this;
    var shouldContinue = true;
    solveSudoku(this.props.table, 0, 0, (result) => {
      shouldContinue = false;
      console.log(result)

      self.props.set(result)
    }, () => {
      return shouldContinue;
    }
    )

  }
  onKeyboardPress(value) {
    var updateData = {
      rowIndex: this.state.rowIndex,
      columnIndex: this.state.columnIndex,
      value
    }

    this.props.update(updateData)

  }
  isShowKeyboard() {
    return this.state && this.state.rowIndex != null;
  }
  render = () => (

    <Drawer
      ref={(ref) => { this.drawer = ref; }}
      content={<DrawerView/>}
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
        </Header>
        <Content style={{ padding: 10 }}>
          <Card>
            <Table table={this.props.table} onSelect={this.props.onPress} />
          </Card>{
            this.isShowKeyboard() && <Keyboard onPress={this.onKeyboardPress.bind(this)} />

          }

          <Grid>
            <Col><Button rounded block onPress={this.solve.bind(this)} ><Text>Solve</Text></Button>
            </Col>
            <Col><Button transparent block onPress={this.props.new} ><Text>New</Text></Button>
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


