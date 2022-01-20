import React from 'react';
import './App.css';
import foto from './img/foto.jpg';
import DogSvg from './DogSvg';

const App = () => {
  const [olho, setOlho] = React.useState(0);

  const handleClick = () => {
    for (let i = 0; i < 6; i++) {
      setTimeout(() => {
        setOlho(i);
      }, 20 * i);
    }
  };

  return (
    <div>
      <DogSvg color="#84e" olho={olho} />
      <p className="fundo" onClick={handleClick}></p>
      <img src={foto} alt="Imagem Cachorro" />
    </div>
  );
};

export default App;
