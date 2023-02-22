import './User.css'
import editIconPath from './../../images/editIcon.svg'
import { useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { useContext } from 'react';

function User({myKey, uid, imageLink, name, placeCount, description, onEditProfile, onImageClick, user, selectUserHandler}) { 

  const handleImageClick = () => onImageClick(user);
  const handleEditClick = (e) => {onEditProfile(); e.stopPropagation()}
  
  let navigate = useNavigate();
  const routeChange = () => {
    localStorage.removeItem('selectedUserId');
    const selectedUserName = name;
    localStorage.setItem('selectedUserName', selectedUserName);
    const selectedUserId = uid;
    localStorage.setItem('selectedUserId', selectedUserId);
    let path =`/${uid}/places`;
    navigate(path);
  }

  const value = useContext(CurrentUserContext);
  const currentUserId = value.currentUser._id

  return ( 
    <div key={myKey} className='user'>
      <div className='user__image-container' onClick={handleImageClick} style={{ 
        backgroundImage: `url(${imageLink})` 
      }}>
        {
        currentUserId === uid &&
          <button className='user__btn' onClick={handleEditClick}>
            <img src={editIconPath} alt='edit button' />
          </button>
        }      
      </div> 
      <div className='user__text-container'>
        <div className='user__name'>{name}</div>
        <div className='user__places-number'>{placeCount} {placeCount === 1 ? 'lugar' : 'lugares'}</div>
        <div className='user__description'>{description}</div>
        <button className='user__places-btn' onClick={routeChange}>Ver lugares</button>
      </div>
    </div>
  );
}
    
export default User;
