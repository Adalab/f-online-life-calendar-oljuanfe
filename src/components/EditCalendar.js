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
        <label 
          htmlFor="date"
          className="date-label"
        >
          Fecha
        </label>
        < MaskedInput
          className='masked-input'
          id="date"
          name="date"
          value=""
          onChange={handleMaskedInput}
          mask={"11/11/1111"}
          placeholder="dd/mm/aaaa"
        />
        <p className="mood-title">Estado</p>
        <div className="mood-wrapper">         
          <label htmlFor="happy" className="checkbox-label">
            <input 
              type="checkbox" 
              name="happy" 
              id="happy" 
              value="happy"
              onClick={handleClickCheckbox}
            />
            :)
          </label>
          <label htmlFor="sad" className="checkbox-label">
            <input 
              type="checkbox" 
              name="sad" 
              id="sad" 
              value="sad"
              onClick={handleClickCheckbox}
            />
            :(
          </label>
        </div>
        
        <label 
          htmlFor="message" 
          className="textarea-label"
        >
          Mensaje
        </label>
        <textarea 
          className="textarea-input"
          name="message" 
          id="message"
          onChange={handleChangeTextArea}
          cols="30" 
          rows="1"
        >
        </textarea>
        <Link 
          to={'/'}
          className="link-router"
        >
          <button 
            onClick={handleClickSave}
            className="save-button button"
          >
            Guardar
          </button>
        </Link>
        <Link 
          to={'/'} 
          className="link-router"
        >
          <button 
            onClick={handleClickCancel}
            className="cancel-button button"
          >
            Cancelar
          </button>
        </Link>
      </div>
    );
  }
}

export default EditCalendar;
