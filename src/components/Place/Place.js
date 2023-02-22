import './Place.css'
import { useState } from 'react';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { useContext } from 'react';
import Map from '../Map/Map';
import editIconPath from './../../images/editIcon.svg'
import deleteIconPath from './../../images/deleteIcon.svg'

function Place({ myKey, imageLink, title, description, address, coordinates, place, onImageClick, onEditPlaceClick, owner /*, coordinates, onCardClick, onCardDelete*/ }) {

  const [showMap, setShowMap] = useState(false);

  const handleImageClick = () => onImageClick(place)
  const handleEditClick = (e) => {onEditPlaceClick(); e.stopPropagation()}

  const openMapHandler = () => setShowMap(true);
  const closeMapHandler = () => setShowMap(false);

  const storedSelectedUserId = localStorage.getItem('selectedUserId')
  const value = useContext(CurrentUserContext);
  const currentUserId = value.currentUser._id
  const ownerId = owner._id

  return ( 
    <div key={myKey} className='place'>
      <Map showMap={showMap} onClose={closeMapHandler} center={coordinates} zoom={16} title={title} />
      <div className='place__image-container' onClick={handleImageClick} style={{ 
        backgroundImage: `url(${imageLink})` 
      }}>
        {
        ownerId === currentUserId &&
        <>
          <button className='place__btn' onClick={handleEditClick} >
            <img src={editIconPath} alt='edit button' />
          </button>
          <button className='place__btn'>
            <img src={deleteIconPath} alt='delete button' />
          </button>
        </>
        }
      </div>
      <div className='place__text-container'>
        <div className='place__title'>{title}</div>
        <div className='place__description'>{description}</div>
        <div className='place__address'>{address}</div>
        <button className='place__map-btn' onClick={openMapHandler}>Ver en mapa</button>
      </div>
    </div>
  );
}

export default Place;