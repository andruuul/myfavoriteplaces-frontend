import React from 'react'
import PopupWithForm from '../PopupWithForm/PopupWithForm'
import { useContext } from 'react';
import { CurrentUserContext } from '../../../context/CurrentUserContext';

export default function EditProfilePopup({isOpen, onEditProfile}) {

  const value = useContext(CurrentUserContext);
  const onClose = value.closeAllPopups;

  const imageLinkRef = React.useRef()
  const nameRef = React.useRef()
  const descriptionRef = React.useRef()
  
  function handleSubmit(e) {
    
    // Evita que el navegador navegue hacia la dirección del formulario
    e.preventDefault();
  
    // Pasa los valores de los componentes gestionados al controlador externo
    onEditProfile({
      name: nameRef.current.value,
      description: descriptionRef.current.value,
      image: imageLinkRef.current.value,
    });
  }
  /*
  {
    _id: 'u1',
    name: 'Andres Canul',
    image:
      'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      places: [{a: 'a'}, {b: 'b'}, {c: 'c'}],
      description: 'Nature enthusiast, learning about ecosystems in a fun way!'
  },
  */

  return(
    <PopupWithForm title='Editar perfil' name='edit-profile'
    isOpen={isOpen}
    onClose={onClose}
    onSubmit={handleSubmit}>
      <label className='popup__label'>Link de la imagen</label><br />
      <input ref={imageLinkRef} className='popup__input' type='url' placeholder='Introduce el link de la imagen' minLength={2} maxLength={100} name='image' /><br />
      <label className='popup__label'>Nombre</label><br />
      <input ref={nameRef} className='popup__input' type='text' placeholder='Introduce el nombre del lugar' minLength={2} maxLength={15} name='name' /><br />
      <label className='popup__label'>Descripción</label><br />
      <input ref={descriptionRef} className='popup__input' type='text' placeholder='Introduce la descripción' minLength={8} maxLength={60} name='description' /><br />
      <button className='popup__submit-button' type='submit'>Guardar cambios</button>
    </PopupWithForm>
  )
}  