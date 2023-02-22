import { useEffect, useState, useMemo } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

import './App.css';
import Header from './../Header/Header';
import Main from './../Main/Main';
import ImagePopup from '../Popups/ImagePopup/ImagePopup';
import LoginPopup from '../Popups/LoginPopup/LoginPopup';
import SignupPopup from '../Popups/SignupForm/SignupPopup';
import NewPlacePopup from '../Popups/NewPlacePopup/NewPlacePopup';
import EditPlacePopup from '../Popups/EditPlacePopup/EditPlacePopup';
import Footer from '../Footer/Footer';
import UserPlaces from '../UserPlaces/UserPlaces';
import { OnWindowEvt } from '../../utils/utils';
import EditProfilePopup from '../Popups/EditProfilePopup/EditProfilePopup';
import { CurrentUserContext } from '../../context/CurrentUserContext'

function App() {

  const [loggedIn, setLoggedIn] = useState(true);

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isSignupPopupOpen, setIsSignupPopupOpen] = useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isNewPlacePopupOpen, setIsNewPlacePopupOpen] = useState(false);
  const [isEditPlacePopupOpen, setIsEditPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }

  function handleSignupClick() {
    console.log("signup")
    setIsSignupPopupOpen(true)
  }

  function handleLoginClick() {
    console.log("login")
    setIsLoginPopupOpen(true)
  }

  function handleNewPlaceClick() {
    setIsNewPlacePopupOpen(true);
  }

  function handleEditPlaceClick() {
    setIsEditPlacePopupOpen(true)
  }

  function handleImageClick(image) {
    setSelectedCard(image)
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false)
    setIsSignupPopupOpen(false)
    setIsLoginPopupOpen(false)
    setIsNewPlacePopupOpen(false);
    setIsEditPlacePopupOpen(false)
    setSelectedCard(null)
  }

  const closeByEsc = (evt) => {
    if (evt.key === 'Escape') {
      closeAllPopups();
    }
  };

  OnWindowEvt('keydown', closeByEsc);

  const location = useLocation();
  const currentUser = {
    _id: 'u1',
    name: 'Current User Name',
    image:
      'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      places: [{a: 'a'}, {b: 'b'}, {c: 'c'}],
      description: 'Nature enthusiast, learning about ecosystems in a fun way!'
  }

  const currentUserMemoValue = useMemo(() => ({currentUser, closeAllPopups}), [currentUser.name])

  return (
    <div className='page'>
      <CurrentUserContext.Provider value={currentUserMemoValue}>
        <Header loggedIn={loggedIn} showBanner={location.pathname === '/home' && true } />
        <Routes>
          <Route path='/home' element={<Main loggedIn={loggedIn} onOpenEditProfile={handleEditProfileClick} onImageClick={handleImageClick} />} />
          <Route path='/:userId/places' element={<UserPlaces onOpenNewPlace={handleNewPlaceClick} onImageClick={handleImageClick} onEditPlaceClick={handleEditPlaceClick} />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
        <ImagePopup selectedCard={selectedCard} />
        <SignupPopup isOpen={isSignupPopupOpen} onClose={closeAllPopups} />
        <LoginPopup isOpen={isLoginPopupOpen} onClose={closeAllPopups} />
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />        <NewPlacePopup isOpen={isNewPlacePopupOpen} onClose={closeAllPopups} />
        <EditPlacePopup isOpen={isEditPlacePopupOpen} onClose={closeAllPopups} />
        <Footer />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
