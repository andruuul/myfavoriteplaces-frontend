import React from 'react'
import PopupWithForm from '../PopupWithForm/PopupWithForm'
import { useContext } from 'react';
import { CurrentUserContext } from '../../../context/CurrentUserContext';

export default function NewPlacePopup({isOpen, onCreatePlace}) {

  const value = useContext(CurrentUserContext);
  const onClose = value.closeAllPopups;
  
  const nameRef = React.useRef()
  const descriptionRef = React.useRef()
  const addressRef = React.useRef()
  const imageLinkRef = React.useRef()
  
  function handleSubmit(e) {
    
    // Evita que el navegador navegue hacia la dirección del formulario
    e.preventDefault();
  
    // Pasa los valores de los componentes gestionados al controlador externo
    onCreatePlace({
      name: nameRef.current.value,
      description: descriptionRef.current.value,
      address: addressRef.current.value,
      imageLink: imageLinkRef.current.value,
    });
  }

  return(
    <PopupWithForm title='Nuevo lugar' name='new-place'
    /*isOpen={isOpen}*/
    isOpen={isOpen}
    onClose={onClose}
    onSubmit={handleSubmit}>
      <label className='popup__label'>Nombre del lugar</label><br />
      <input ref={nameRef} className='popup__input' type='text' placeholder='Introduce el nombre del lugar' required minLength={2} maxLength={25} name='name' /><br />
      <label className='popup__label'>Descripción</label><br />
      <input ref={descriptionRef} className='popup__input' type='text' placeholder='Introduce la descripción' required minLength={4} maxLength={40} name='description' /><br />
      <label className='popup__label'>Dirección</label><br />
      <input ref={addressRef} className='popup__input' type='text' placeholder='Introduce la dirección del lugar' required minLength={2} maxLength={200} name='address' /><br />
      <label className='popup__label'>Link de la imagen</label><br />
      <input ref={imageLinkRef} className='popup__input' type='url' placeholder='Introduce el link de la imagen' required minLength={4} maxLength={100} name='image' /><br />
      <button className='popup__submit-button' type='submit'>Crear lugar</button>
    </PopupWithForm>
  )
}  

//https://code-boxx.com/show-error-messages-html-forms/
//Checar el link anterior para hacer custom validation errors