import './ImagePopup.css'
import { useContext } from 'react';
import { CurrentUserContext } from '../../../context/CurrentUserContext';

function ImagePopup({selectedCard}) {
  const card = selectedCard || {image: '', name: '', title: ''}
  const value = useContext(CurrentUserContext);
  const onClose = value.closeAllPopups;

  return (
    <>
      <div className={`image-popup ${card.image ? 'image-popup_is-opened' : ''}`} >
        <img src={card.image} className="image-popup__image" alt={card.name || card.title} />
        <button className="image-popup__close-button" onClick={onClose}></button>
      </div>
      <div className={`overlay_hidden ${selectedCard ? 'overlay_active' : ''}`} onClick={onClose} />
    </>
  );
}

export default ImagePopup;