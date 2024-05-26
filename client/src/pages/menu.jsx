import './menu.css';
import '../components/navbar.css';
import Sidebar from '../components/sidebar';
import Poster from './poster.jsx'; // Assurez-vous d'utiliser l'extension .jsx ou .js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Menu() {
  // Fonction de soumission du formulaire
  const handleSubmit = (data) => {
    console.log('Données soumises :', data);
  };

  return (
    <div className="Menu">
      <div className='navbar'>
        {/* Contenu de votre navbar */}
      </div>
      <div className='sidebarLayout centered'>
        <Sidebar />
      </div>

      <div className="content centered">
        <Routes>
          {/* Utilisez une fonction de rendu pour passer la prop onSubmit */}
          <Route path='/poster' element={<Poster onSubmit={handleSubmit} />} />
        </Routes>
      </div>
      <div className='bottombar'>
        {/* Contenu de votre bottombar */}
      </div>
    </div>
  );
}

export default Menu;
