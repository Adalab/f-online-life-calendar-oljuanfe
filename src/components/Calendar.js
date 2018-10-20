import React, { Component } from 'react';
import EditCalendar from './EditCalendar';
import { Link } from 'react-router-dom';


class Calendar extends Component {
  render() {
    return (
      <div className="Calendar">
        <Link to={'/edit/'} className="link-router">
          <button>
            +
          </button>
        </Link>
        Componente calendario
      </div>
    );
  }
}

export default Calendar;
