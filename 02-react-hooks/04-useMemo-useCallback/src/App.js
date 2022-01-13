import React from 'react';

const set1 = new Set();
const set2 = new Set();

const Produto = () => {
  const func1 = () => {
    console.log('Teste1');
  };
  const func2 = React.useCallback(() => {
    console.log('Teste2');
  }, []);

  set1.add(func1);
  set2.add(func2);

  console.log('Set1: ', set1);
  console.log('Set: ', set2);

  return (
    <div>
      <p onClick={func1}>produto 1</p>
      <p onClick={func2}>produto 2</p>
    </div>
  );
};

const App = () => {
  const [contar, setContar] = React.useState(0);

  return (
    <div>
      <Produto />
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  );
};

export default App;
