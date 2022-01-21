import React from 'react';
import Exemplo from './Exemplo';

const App = () => {
  const reducer = (state, action) => {
    switch (action) {
      case 'aumentar':
        return state + 1;
        break;
      case 'diminuir':
        return state - 1;
        break;
      default:
        throw new Error();
        break;
    }

    // if (action === 'aumentar') return state + 1;
    // if (action === 'diminuir') return state - 1;
    // return new Error('Error action not found');
  };

  const [state, dispatch] = React.useReducer(reducer, 0);
  // const aumentar = () => {
  //   setContar(contar + 1);
  // };

  // const diminuir = () => {
  //   setContar(contar - 1);
  // };

  return (
    <div>
      <h1>      {state}</h1>
      <button onClick={() => dispatch('aumentar')}> + </button>
      {'   '}
      <button onClick={() => dispatch('diminuir')}> - </button>
      <Exemplo />
    </div>
  );
};

export default App;
