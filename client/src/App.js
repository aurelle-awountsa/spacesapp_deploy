
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import Accueil from './pages/Accueil.jsx';
import Contact from './pages/contact.jsx';
import Connexion from './pages/connexion.jsx';
import Poster from './pages/poster.jsx';
import Home from './pages/home.jsx';
import apropos from './pages/apropos.jsx';
import signup from './pages/signup.jsx';
import Compte from './components/compte.jsx';
import { Reserves } from './components/compte.jsx';

function App() {
  const handleSubmit = (data) => {
    console.log('Données soumises :', data);
  };
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/home' Component={Home} />
          <Route path='/accueil' Component={Accueil} />
          <Route path='/connexion' Component={Connexion} />
          <Route path='/inscription' Component={signup} />
          <Route path='/contact' Component={Contact} />
          <Route path='/apropos' Component={apropos} />
          <Route path='/poster' element={<Poster onSubmit={handleSubmit} />} />
          <Route path='/reserve' element={<Reserves onSubmit={handleSubmit} />} />
          <Route path='/compte' element={<Compte onSubmit={handleSubmit} />} />


        </Routes>
      </Router>



    </div>
  );
}

export default App;

