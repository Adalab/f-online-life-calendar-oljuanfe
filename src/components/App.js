import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import EditCalendar from './EditCalendar';
import Calendar from './Calendar';

class App extends Component {
  constructor (props) {
    super(props);
    this.state= {
      data: [
        {
          maskedValue: '',
          checkboxValue: '',
          textAreaValue: '',
        }
      ]
    }
    this.handleClickSave = this.handleClickSave.bind(this);
  }

  handleClickSave (event) {
    console.log('clickando');
    let dataLastIndex = this.state.data.length - 1; 
    console.log('lastindex', dataLastIndex);
    this.setState(
      {
        ...this.state.data,data:{}
      }
    )
  }

  render() {
    console.log('state',this.state);
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path='/'
            render={
              (props) => (
                  <Calendar data="data"/>
              )
            }
          />
          <Route
            exact
            path='/edit/'
            render={
              (props) => <EditCalendar 
                            data="data"
                            handleClickSave = {this.handleClickSave}
                          />
            }
          />
        </Switch>
      </div>
    );
  }
}

export default App;
