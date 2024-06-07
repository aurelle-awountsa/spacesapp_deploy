import React from 'react';
import './navbar.css';

function Navbar() {
  // Retrieve the user data from localStorage
  const user = JSON.parse(localStorage.getItem('currentUser'));

  function deconnexion() {
    localStorage.removeItem('currentUser');
    window.location.href = '/connexion';  // Correct the redirect
  }

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="/home">Spaces</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/accueil">Accueil</a>
            </li>

            {user ? (
              <>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {user.userName}
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/compte">Mon compte</a></li>
                    <li><a className="dropdown-item" href="/espaces">Mes espaces</a></li>
                    <li><a className="dropdown-item" href="/reserve">Reservé(s)</a></li>
                    <li><a className="dropdown-item" href="/poster">Poster</a></li>
                    <li><a className="dropdown-item" href="#" onClick={deconnexion}>Déconnexion</a></li>
                  </ul>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="/connexion">Connexion</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/inscription">Inscription</a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
