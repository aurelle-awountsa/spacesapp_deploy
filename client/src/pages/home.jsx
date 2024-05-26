import './home.css';
import monImage from '../bg.jpg'; 



function App() {
  return (
    <div className="App">
      <header className="Spaces"></header>
      <body>
        <div>
          <h2>Bienvenue dans notre application de location d'espaces</h2>
          <img className='img' src={monImage} alt="Description" style={{ width: '1500px', height: '490px' }}/>
        </div>
        
      </body>
    </div>
  );
}

export default App; 