import React from 'react';
import useLocalStorage from './useLocalStorage';

const App = () => {
  const [produto, setProduto] = useLocalStorage('produto', '');
  console.log(setProduto, produto);

  const handleClick = ({ target }) => {
    setProduto(target.innerText);
  };

  return (
    <div>
      <p>Produto preferido: {produto}</p>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
    </div>
  );
};

export default App;
