import React, { useState } from 'react';
import axios from 'axios';
import './signup.css';
import { ReactComponent as EyeIcon } from './eye.svg';

function Signup({ onSubmit }) {
  const [name, setName] = useState('');
  const [userName, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [cpassword, setCpassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [passwordValid, setPasswordValid] = useState(false);
  const [cpasswordValid, setCpasswordValid] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:5000/user/signup', {
        name,
        userName,
        email,
        password,
        cpassword
      });
      alert('L\'tilisateur a été créé')
      console.log(response.data);

      setName('');
      setUsername('');
      setEmail('');
      setPassword('');
      setCpassword('');
      if(onSubmit) onSubmit();

    } catch(error){
      alert('les mots de passe ne correspondent pas')
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordValid(validatePassword(newPassword));
  };

  const handleCPasswordChange = (e) => {
    const newCPassword = e.target.value;
    setCpassword(newCPassword);
    setCpasswordValid(validateCPassword(newCPassword));
  };

  const validatePassword = (password) => {
    // Expression régulière pour valider le mot de passe : min 8 caractères, au moins une majuscule et un caractère spécial
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;
    return passwordRegex.test(password);
  };

  const validateCPassword = (cpassword) => {
    return cpassword === password;
  };

  return (
    <div className='main'>
      <form onSubmit={handleSubmit} className="row g-3 " >
        <div className='row justify-content-center mt-5'>
          <div className='col-md-5'>
            <div className='bs'>
              <h1>Inscription</h1>
              <input type='text' className='form-control' placeholder='Nom' value={name} onChange={(e) => setName(e.target.value)} required minLength={4} maxLength={15} />
              <input type='text' className='form-control' placeholder="Nom d'utilisateur" value={userName} onChange={(e) => setUsername(e.target.value)} required minLength={4} maxLength={15} />
              <input type='text' className='form-control' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
              <div className='password-input'>
                <input type={showPassword ? 'text' : 'password'} className={`form-control ${showPassword ? 'show-password' : ''}`} placeholder='Mot de passe' value={password} onChange={handlePasswordChange} required />
                <button type='button' className='password-toggle' onClick={toggleShowPassword}>
                  <EyeIcon className={`eye-icon ${showPassword ? 'show' : ''}`} />
                </button>
              </div>

              <div className='password-input'>
                <input type={showPassword ? 'text' : 'password'} className={`form-control ${showPassword ? 'show-password' : ''}`} placeholder='Confirmez le mot de passe' value={cpassword} onChange={handleCPasswordChange} required />
                <button type='button' className='password-toggle' onClick={toggleShowPassword}>
                  <EyeIcon className={`eye-icon ${showPassword ? 'show' : ''}`} />
                </button>
              </div>

              <button className='btn btn-primary mt-3' type="submit" disabled={!passwordValid || !cpasswordValid || loading}>{loading ? 'Chargement...' : 'Inscription'}</button>

            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
