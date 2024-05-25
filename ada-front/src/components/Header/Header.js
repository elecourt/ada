import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import logo from '../../assets/logo_ada_def.png';
import './Header.css';

function Header() {
    const navigate = useNavigate();
  return (
    <nav>
      <div className="header">
      <img src={logo} alt="Logo" className="logo" />
      <ul className="nav-links">
        <li><a href="#accueil" onClick={() => navigate('/')}>Accueil</a></li>
        <li><a href="#service">Service</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#equipe">Equipe</a></li>
      </ul>
      <div className="buttons">
        <button className="button">Button</button>
        <button className="button black">Button</button>
      </div>
      </div>
      <Outlet></Outlet>
    </nav>
    
  );
}

export default Header;
