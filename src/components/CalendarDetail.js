import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class CalendarDetail extends Component {
  render() {
    const {
      match,
      data,
    } = this.props;

    const {
      params
    } = match;

    const detailId = parseInt(params.id);
    let detailChosen = data.filter((detail,index) => {
      return index === detailId;
    });
    let detailInfo = detailChosen[0];
    
    return (
      <div className="CalendarDetail">
        <Link to={'/'} className="link-router">
          <button>
            Volver
          </button>
        </Link>
        <img src={detailInfo !== undefined ?require('../images/happy.png') : ''} alt="happy"/>
        <div>
          <img 
            src={
              detailInfo !== undefined 
                ?require(`../images/${detailInfo.checkboxValue}.png`) 
                : ''
            } 
            alt={
              detailInfo !== undefined 
                ?detailInfo.maskedValue 
                : ''
            }
            title={
              detailInfo !== undefined 
                ?detailInfo.maskedValue 
                : ''
            }
          />
          <p>
            {detailInfo !== undefined 
              ?detailInfo.textAreaValue 
              : ''}
          </p>
        </div>
      </div>
    );
  }
}

export default CalendarDetail;
