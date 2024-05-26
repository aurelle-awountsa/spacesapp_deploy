import React from 'react';
import './bottombar.css';
function BottomNavbar() {
  return (
    <nav className="navbar1 navbar-expand-lg ">
  <div className="container-fluid">    
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link1 active" aria-current="page" href="/contact">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link1" href="/apropos">A propos</a>
        </li>
        
        
      </ul>
  </div>
</nav>
  );
}

export default BottomNavbar;
