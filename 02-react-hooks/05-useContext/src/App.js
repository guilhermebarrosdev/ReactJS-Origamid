import React from 'react';
import { GlobalStorage } from './GlobalContext';
import Produto from './Produto';
import Limpar from './Limpar';

const App = () => {
  return (
    <GlobalStorage>
      <Produto />
      <Limpar />
    </GlobalStorage>
  );
};

export default App;
