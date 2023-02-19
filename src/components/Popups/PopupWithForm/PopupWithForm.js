import './PopupWithForm.css'
import { useContext } from 'react';
import { CurrentUserContext } from '../../../context/CurrentUserContext';

function PopupWithForm({isOpen, name, title, children, onSubmit}) { 
  
  const value = useContext(CurrentUserContext);
  const onClose = value.closeAllPopups;

  return (
    <>
      <div className={`popup ${isOpen ? (`${name}-popup popup_is-opened`) : ('')}`}>
        <button className="popup__close-button" onClick={onClose}></button>
        <form className="popup__form" onSubmit={onSubmit} name={`${name}-form`}>
          <p className="popup__title">{title}</p>
          {children}
        </form>
      </div>
      <div className={`overlay_hidden ${isOpen ? 'overlay_active' : ''}`} onClick={onClose}>
      </div>
    </>
  );
}


export default PopupWithForm;