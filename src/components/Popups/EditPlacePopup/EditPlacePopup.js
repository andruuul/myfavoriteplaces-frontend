import React from 'react'
import PopupWithForm from '../PopupWithForm/PopupWithForm'
import { useContext } from 'react';
import { CurrentUserContext } from '../../../context/CurrentUserContext';

export default function EditPlacePopup({isOpen, onEditPlace}) {

  const value = useContext(CurrentUserContext);
  const onClose = value.closeAllPopups;
  
  const nameRef = React.useRef()
  const descriptionRef = React.useRef()
  const imageLinkRef = React.useRef()
  
  function handleSubmit(e) {
    
    // Evita que el navegador navegue hacia la dirección del formulario
    e.preventDefault();
  
    // Pasa los valores de los componentes gestionados al controlador externo
    onEditPlace({
      name: nameRef.current.value,
      description: descriptionRef.current.value,
      imageLink: imageLinkRef.current.value,
    });
  }

  /*cambiar esto*/

  return(
    <PopupWithForm title='Editar lugar' name='edit-place'
    isOpen={isOpen}
    onClose={onClose}
    onSubmit={handleSubmit}>
      <label className='popup__label'>Nombre del lugar</label><br />
      <input ref={nameRef} className='popup__input' type='text' placeholder='Introduce el nombre del lugar' required minLength={2} maxLength={25} name='name' /><br />
      <label className='popup__label'>Descripción</label><br />
      <input ref={descriptionRef} className='popup__input' type='text' placeholder='Introduce la descripción' required minLength={4} maxLength={40} name='description' /><br />
      <label className='popup__label'>Link de la imagen</label><br />
      <input ref={imageLinkRef} className='popup__input' type='url' placeholder='Introduce el link de la imagen' required minLength={2} maxLength={40} name='image' /><br />
      <button className='popup__submit-button' type='submit'>Guardar cambios</button>
    </PopupWithForm>
  )
}  

//https://code-boxx.com/show-error-messages-html-forms/
//Checar el link anterior para hacer custom validation errors