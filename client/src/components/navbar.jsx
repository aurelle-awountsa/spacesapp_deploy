import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg  ">
  <div className="container-fluid">
    <a className="navbar-brand" href="/home">Spaces</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a  className="nav-link" aria-current="page" href="/accueil">Accueil</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="/connexion">Connexion</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="/inscription">Inscription</a>
        </li>
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="a" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Menu
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/compte">Mon compte</a></li>
            <li><a className="dropdown-item" href="/espaces">Mes espaces</a></li>
            <li><a className="dropdown-item" href="/loues">Loués</a></li>
            <li><a className="dropdown-item" href="/favoris">Favoris</a></li>
            <li><a className="dropdown-item" href="/poster">Poster</a></li>



          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}

export default Navbar;