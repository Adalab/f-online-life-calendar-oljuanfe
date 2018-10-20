import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import EditCalendar from './EditCalendar';
import Calendar from './Calendar';

class App extends Component {
  constructor (props) {
    super(props);
    this.state= {
      data: {
        maskedValue: '',
        checkboxValue: '',
        textAreaValue: '',
      }
    }
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path='/'
            render={
              (props) => (
                  <Calendar/>
              )
            }
          />
          <Route
            exact
            path='/edit/'
            render={
              (props) => <EditCalendar/>
            }
          />
        </Switch>
      </div>
    );
  }
}

export default App;
