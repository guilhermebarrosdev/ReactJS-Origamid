import React from 'react';

const App = () => {
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('');

  return (
    <form>
      <h2>Cores</h2>
      <label>
        <input
          // name="produto"
          checked={cor === 'azul'}
          onChange={({ target }) => setCor(target.value)}
          type="radio"
          value="azul"
        />
        Azul
      </label>
      <label>
        <input
          // name="produto"
          checked={produto === 'vermelho'}
          onChange={({ target }) => setCor(target.value)}
          type="radio"
          value="vermelho"
        />
        Vermelho
      </label>
      {cor}
      <h2>Produtos</h2>
      <label>
        <input
          // name="produto"
          checked={produto === 'smartphone'}
          onChange={({ target }) => setProduto(target.value)}
          type="radio"
          value="smartphone"
        />
        Smartphone
      </label>
      <label>
        <input
          // name="produto"
          checked={produto === 'notebook'}
          onChange={({ target }) => setProduto(target.value)}
          type="radio"
          value="notebook"
        />
        Notebook
      </label>
      {produto}
    </form>
  );
};

export default App;
