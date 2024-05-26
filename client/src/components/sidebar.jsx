// Sidebar.js

import React from 'react';
import './sidebar.css'; // Importer le fichier CSS pour le style de la barre latérale

function Sidebar() {
  return (
    <div className="sidebar">
      
      <side className="sidebar">
      
      <ul className="sidebar-side">
        
        <li className="side-item">
          <a href="Moncompte" className="side-link">Mon compte</a>
        </li>
        
        <li className="side-item">
          <a href="Favoris" className="side-link">Favoris</a>
        </li>
        <li className="side-item">
          <a href="Poster" className="side-link">Poster</a>
        </li>

      </ul>
    </side>   
    </div>
  );
}

export default Sidebar;
