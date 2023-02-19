import React from 'react'
import PopupWithForm from '../PopupWithForm/PopupWithForm'
import { useContext } from 'react';
import { CurrentUserContext } from '../../../context/CurrentUserContext';

export default function LoginPopup({isOpen, onUpdateUser}) {

  const value = useContext(CurrentUserContext);
  const onClose = value.closeAllPopups;
  
  const emailRef = React.useRef()
  const passwordRef = React.useRef()
  
  /*modificar esto*/
  isOpen = false;
  
  function handleSubmit(e) {
    
    // Evita que el navegador navegue hacia la dirección del formulario
    e.preventDefault();
  
    // Pasa los valores de los componentes gestionados al controlador externo
    onUpdateUser({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
  }



  return(
    <PopupWithForm title='Inicia sesión' name='auth'
    isOpen={isOpen}
    onClose={onClose}
    onSubmit={handleSubmit}>
      <label className='popup__label'>Correo electrónico</label><br />
      <input ref={emailRef} className='popup__input' type='email' placeholder='Introduce tu correo electrónico' required minLength={2} maxLength={40} name='email' /><br />
      <label className='popup__label'>Contraseña</label><br />
      <input ref={passwordRef} className='popup__input' type='password' placeholder='Introduce tu contraseña' required minLength={2} maxLength={200} name='password' /><br />
      <button className='popup__submit-button' type='submit'>Iniciar sesión</button>
      <p className='popup__link-text'>o <a className='popup__link' href='/signup'>registrarse</a></p>
    </PopupWithForm>
  )
}  

//https://code-boxx.com/show-error-messages-html-forms/
//Checar el link anterior para hacer custom validation errors