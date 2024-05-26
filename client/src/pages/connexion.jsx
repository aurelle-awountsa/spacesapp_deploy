import React, { useContext, useState } from 'react';
import axios from "axios"
import './connexion.css';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as EyeIcon } from './eye.svg';
import { AuthContext } from '../context/AuthContext';

function Connexion({ onSubmit }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const {login} = useContext(AuthContext);
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:5000/user/login', {

        email,
        password,
      });
      login(response.data.token);
      console.log(response.data);


      setEmail('');
      setPassword('');
      setLoading(false); 
      if (onSubmit) onSubmit();
      const data = response.data
        console.log(data);

      navigate('/home');
    } catch (error) {
      alert('erreur lors de l\'authentification ', error)
      setLoading(false); // Arrêtez le chargement en cas d'erreur

    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };



  return (
    <div className='main'>
      <form onSubmit={handleSubmit} className="row g-3 " >
        <div className='row justify-content-center mt-5'>
          <div className='col-md-5'>
            <div className='bs'>
              <h1>Connexion</h1>
              <input type='text' className='form-control' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
              <div className='password-input'>
                <input type={showPassword ? 'text' : 'password'} className={`form-control ${showPassword ? 'show-password' : ''}`} placeholder='Mot de passe' value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type='button' className='password-toggle' onClick={toggleShowPassword}>
                  <EyeIcon className={`eye-icon ${showPassword ? 'show' : ''}`} />
                </button>
              </div>

              <button className='btn btn-primary mt-3' type="submit" disabled={loading}>{loading ? 'Chargement...' : 'Connexion'}</button>
              <div className='links'>
                <a className="link1" href="/inscription">Je n'ai pas de compte</a>
                <a className="link2" >Mot de passe oublier</a>

              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Connexion;
