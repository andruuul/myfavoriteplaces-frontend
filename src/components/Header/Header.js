//isLoggedIn
import Banner from "./../Banner/Banner";
import NavBar from "./../NavBar/NavBar";
import './Header.css';

export default function Header({loggedIn, showBanner}) {
  return (
    <div className={loggedIn ? 'header' : 'header_not-logged-in'}>
      <NavBar loggedIn={loggedIn} />
      {showBanner && <Banner />}
    </div>
  );
};