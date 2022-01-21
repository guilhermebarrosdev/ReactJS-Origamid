import React from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'remover':
      return state.filter((item) => item !== action.content);
      break;
    case 'adicionar':
      return [...state, action.content];
      break;
    default:
      throw new Error();
      break;
  }
};

const Exemplo = () => {
  const [state, dispatch] = React.useReducer(reducer, [' Banana ', ' Uva ']);

  return (
    <div>
      <br></br>
      <button
        onClick={() => dispatch({ type: 'remover', content: ' Banana ' })}
      >
        Remover Banana
      </button>
      {'  '}
      <button
        onClick={() => dispatch({ type: 'adicionar', content: ' Limão ' })}
      >
        Adicionar Limão
      </button>
      {state}
    </div>
  );
};

export default Exemplo;
