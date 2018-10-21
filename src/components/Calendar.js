import React, { Component } from 'react';
import EditCalendar from './EditCalendar';
import { Link } from 'react-router-dom';
import { happy } from '../images/happy.png';
import { sad } from '../images/sad.png';
import { image} from './happy.png';


class Calendar extends Component {
  render() {
    return (
      <div className="Calendar">
        <Link to={'/edit/'} className="link-router">
          <button>
            +
          </button>
        </Link>
        <img src={require('../images/happy.png')} alt="happy"/>
        <img src={require('../images/sad.png')} alt="sad"/>

        Componente calendario
      </div>
    );
  }
}

export default Calendar;
