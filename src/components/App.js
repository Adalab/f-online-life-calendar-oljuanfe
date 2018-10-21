import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import EditCalendar from './EditCalendar';
import Calendar from './Calendar';
import CalendarDetail from './CalendarDetail';

class App extends Component {
  constructor (props) {
    super(props);
    this.state= {
      data: [],
      editorData : {
        maskedValue: '',
        checkboxValue: '',
        textAreaValue: '',
      },
      dataStoraged: [],
    }
    this.handleClickSave = this.handleClickSave.bind(this);
    this.handleClickCancel = this.handleClickCancel.bind(this);
    this.handleMaskedInput = this.handleMaskedInput.bind(this);
    this.handleClickCheckbox = this.handleClickCheckbox.bind(this);
    this.handleChangeTextArea = this.handleChangeTextArea.bind(this);
  }

  componentDidMount () {
    let dataFromStorage ;
    if (localStorage.length !==0 && localStorage!== '[]'){
      dataFromStorage = JSON.parse(localStorage.getItem('data'));
      this.setState({dataStoraged: dataFromStorage});
    }
  }

  componentDidUpdate() {
    localStorage.setItem('data', JSON.stringify(this.state.dataStoraged));
  }

  handleClickSave (event) {
    this.setState(
      {
        data: [...this.state.data,this.state.editorData],
        dataStoraged: [...this.state.dataStoraged,this.state.editorData]
      },
      this.setState(
        {editorData: {}}
      ),
    );
    localStorage.setItem('data', JSON.stringify(this.state.dataStoraged));
  }

  handleClickCancel (event) {
    this.setState(
      {editorData: {}}
    );
  }

  handleMaskedInput (event) {
    let valueMasked = event.target.value;
    this.setState(
      {editorData:{...this.state.editorData,maskedValue: valueMasked}}
    )
  }

  handleClickCheckbox (event) {
    let valueCheckbox = event.target.value;
    if (event.target.checked === true) {
      this.setState(
        {editorData: {...this.state.editorData, checkboxValue: valueCheckbox}}
      );
    }
  }

  handleChangeTextArea (event) {
    let valueTextArea = event.target.value;
    this.setState(
      {editorData: {...this.state.editorData, textAreaValue: valueTextArea}}
    );
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
                  <Calendar data={this.state.dataStoraged}/>
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
          <Route
            exact
            path='/:id'
            render={
              (props) => (
                  <CalendarDetail 
                  match={props.match}
                  data={this.state.dataStoraged}/>
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

export default App;
