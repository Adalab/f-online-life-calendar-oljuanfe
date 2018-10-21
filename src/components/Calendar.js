import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Calendar extends Component {
  render() {
    const {
      data,
    } = this.props;
    console.log('data', data);
    return (
      <div className="Calendar">
        <Link to={'/edit/'} className="link-router">
          <button>
            +
          </button>
        </Link>
        <img src={require('../images/happy.png')} alt="happy"/>
        <img src={require('../images/sad.png')} alt="sad"/>
        <ul>
          {
            data.map((dayData,index) => {
              console.log('daydata',dayData);
              return (
                <Link to={`/${index}`} key={index}>
                  <li key={index}>
                  <img src={require(`../images/${dayData.checkboxValue}.png`)} alt={dayData.checkboxValue}/>
                </li>
                </Link>
                
              );
            })
          }
        </ul>
      </div>
    );
  }
}

export default Calendar;
