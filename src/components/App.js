import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import EditCalendar from './EditCalendar';
import Calendar from './Calendar';

class App extends Component {
  constructor (props) {
    super(props);
    this.state= {
      data: [],
      editorData : {
        maskedValue: '',
        checkboxValue: '',
        textAreaValue: '',
      }
    }
    this.handleClickSave = this.handleClickSave.bind(this);
    this.handleClickCancel = this.handleClickCancel.bind(this);
    this.handleMaskedInput = this.handleMaskedInput.bind(this);
    this.handleClickCheckbox = this.handleClickCheckbox.bind(this);
    this.handleChangeTextArea = this.handleChangeTextArea.bind(this);
  }

  handleClickSave (event) {
    console.log('clickando');
    console.log(this.state.editorData);
    this.setState(
      {data: [...this.state.data,this.state.editorData]},
      this.setState(
        {editorData: {}}
      )
    );
  }

  handleClickCancel (event) {
    this.setState(
      {editorData: {}}
    );
  }

  handleMaskedInput (event) {
    console.log('masked');
    let valueMasked = event.target.value;
    console.log('value', valueMasked);
    this.setState(
      {editorData:{...this.state.editorData,maskedValue: valueMasked}}
    );
  }

  handleClickCheckbox (event) {
    console.log('checkbox');
    console.log(event.target.value);
    console.log(event.target.checked);
    let valueCheckbox = event.target.value;
    if (event.target.checked === true) {
      this.setState(
        {editorData: {...this.state.editorData, checkboxValue: valueCheckbox}}
      );
    }
  }

  handleChangeTextArea (event) {
    console.log('textarea');
    let valueTextArea = event.target.value;
    this.setState(
      {editorData: {...this.state.editorData, textAreaValue: valueTextArea}}
    );
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
                  <Calendar data={this.state.data}/>
              )
            }
          />
          <Route
            exact
            path='/edit/'
            render={
              (props) => <EditCalendar 
                            data={this.state.data}
                            handleClickSave = {this.handleClickSave}
                            handleClickCancel = {this.handleClickCancel}
                            handleClickCheckbox = {this.handleClickCheckbox}
                            handleChangeTextArea = {this.handleChangeTextArea}
                            handleMaskedInput = {this.handleMaskedInput}
                          />
            }
          />
        </Switch>
      </div>
    );
  }
}

export default App;
