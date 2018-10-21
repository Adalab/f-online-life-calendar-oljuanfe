import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MaskedInput from 'react-maskedinput'

class EditCalendar extends Component {
  render() {
    const {
      handleClickSave,
      handleClickCheckbox,
      handleChangeTextArea,
      handleMaskedInput,
      handleClickCancel,
    } = this.props;
    return (
      <div className="edit-wrapper">
        <label htmlFor="date">Fecha</label>
        < MaskedInput
          className=''
          id="date"
          name="date"
          value=""
          onChange={handleMaskedInput}
          mask={"11/11/1111"}
          placeholder="dd/mm/aaaa"
        />
        <p>Estado</p>
        <label htmlFor="happy">
          <input 
            type="checkbox" 
            name="happy" 
            id="happy" 
            value="happy"
            onClick={handleClickCheckbox}
          />
          :)
        </label>
        <label htmlFor="sad">
          <input 
            type="checkbox" 
            name="sad" 
            id="sad" 
            value="sad"
            onClick={handleClickCheckbox}
          />
          :(
        </label>
        <label htmlFor="message">Mensaje</label>
        <textarea 
          name="message" 
          id="message"
          onChange={handleChangeTextArea}
          cols="30" 
          rows="1"
        >
        </textarea>
        <Link to={'/'} className="link-router">
          <button onClick={handleClickSave}>
            Guardar
          </button>
        </Link>
        <Link to={'/'} className="link-router">
          <button onClick={handleClickCancel}>
            Cancelar
          </button>
        </Link>
      </div>
    );
  }
}

export default EditCalendar;
