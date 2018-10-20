import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MaskedInput from 'react-maskedinput'

class EditCalendar extends Component {
  render() {
    return (
      <div className="edit-wrapper">
        <label htmlFor="date">Fecha</label>
        < MaskedInput
          className=''
          id="date"
          name="date"
          value="date"
          // onChange={}
          mask={"11/11/1111"}
          placeholder="dd/mm/aaaa"
        />
        <p>Estado</p>
        <label htmlFor="happy">
          <input type="checkbox" name="happy" id="happy" value="happy"/>
          :)
        </label>
        <label htmlFor="sad">
          <input type="checkbox" name="sad" id="sad" value="sad"/>
          :(
        </label>
        <label htmlFor="message">Mensaje</label>
        <textarea name="message" id="message" cols="30" rows="1"></textarea>
        <Link to={'/'} className="link-router">
          <button>
            Guardar
          </button>
        </Link>
        <Link to={'/'} className="link-router">
          <button>
            Cancelar
          </button>
        </Link>
      </div>
    );
  }
}

export default EditCalendar;
