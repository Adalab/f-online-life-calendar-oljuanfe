import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import EditCalendar from './EditCalendar';
import Calendar from './Calendar';

class App extends Component {
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
