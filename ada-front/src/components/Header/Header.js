import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import logo from '../../assets/logo_ada3.png';
import './Header.css';

function Header() {
    const navigate = useNavigate();
  return (
    <nav>
      <div className="header">
      <a href="#accueil" onClick={() => navigate('/')}><img src={logo} alt="Logo" className="logo" /></a>
      <ul className="nav-links">
        <li><a href="#quisommesnous">Qui sommes-nous ?</a></li>
        <li><a href="#service">Nos services</a></li>
        <li><a href="#contact">Tarifs</a></li>
        <li><a href="#equipe">Actualites</a></li>
        <li><a href="#equipe">Contact</a></li>
      </ul>
      <div className="buttons">
        <a href="#chat"><button className="button">Chat</button></a>
        <a href="#connexion"><button className="button orange">Connexion</button></a>
      </div>
      </div>
      <hr></hr>
      <Outlet></Outlet>
    </nav>
    
  );
}

export default Header;
