import React from 'react';
import './Footer.css'

const year = new Date().getFullYear()

export default function Footer({ navigate }) {
  return (
    <footer className="footer">
      <p onClick={navigate} className="footer__copyright">&copy; {year}. Andrés Canul</p>
    </footer>
  );
}
