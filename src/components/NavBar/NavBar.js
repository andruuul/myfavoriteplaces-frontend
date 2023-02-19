import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import logoutIconPath from './../../images/logoutIcon.svg'
import './NavBar.css';

export default function NavBar({loggedIn}) {

  const value = useContext(CurrentUserContext);
  const currentUserName = value.currentUser.name;
  const currentUserId = value.currentUser._id;

  return (
    loggedIn ? (
      <nav className="navbar">
        <h1 className='navbar__title'>My Favorite Places</h1>
        <div className='navbar__buttons-container'>
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? 'navbar__item_active' : 'navbar__item'
              }
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/${currentUserId}/places`}
              className={({ isActive }) =>
                isActive ? 'navbar__item_active' : 'navbar__item'
              }
            >
              Mis lugares
            </NavLink>
          </li>
          <button className='navbar__button'>
            <p className="navbar__user">{currentUserName}</p>
            <img src={logoutIconPath} alt='logout' />
          </button>
        </div>
      </nav> 
    ) : (
      <nav className="navbar navbar_not-logged-in">
        <h1 className='navbar__title'>My Favorite Places</h1>
        <div className='navbar__buttons-container navbar__buttons-container_not-logged-in'>
          <button className='navbar__button navbar__button_not-logged-in'>
            <p className="navbar__button-text">Iniciar sesión</p>
          </button>
        </div>
      </nav> 
    )
  );
};
