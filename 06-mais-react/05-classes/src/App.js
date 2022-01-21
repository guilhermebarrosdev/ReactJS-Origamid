import React from 'react';
import Produtos from './Produtos';

const App = () => {
  const [ativo, setAtivo] = React.useState(true);

  return (
    <div>
      {ativo && <Produtos titulo="Esses são os Produtos" />}
      <br></br>
      <button onClick={() => setAtivo(!ativo)}>Toggle</button>
    </div>
  );
};

export default App;
