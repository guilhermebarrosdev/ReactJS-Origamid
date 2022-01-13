import React from 'react';
import ProdutoExercicio from './ProdutoExercicio';

const App = () => {
  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    const produtoLocal = window.localStorage.getItem('produto');
    if (produtoLocal !== null) setProduto(produtoLocal);
  }, []);

  React.useEffect(() => {
    if (produto !== null) window.localStorage.setItem('produto', produto);
  }, [produto]);

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  return (
    <div>
      <h1>Preferência: {produto}</h1>
      <button style={{ margin: '0.5rem' }} onClick={handleClick}>
        notebook
      </button>
      <button style={{ margin: '0.5rem' }} onClick={handleClick}>
        smartphone
      </button>
      <ProdutoExercicio produto={produto} />
    </div>
  );
};

export default App;
