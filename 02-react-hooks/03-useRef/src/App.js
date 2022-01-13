import React from 'react';

const App = () => {
  const [carrinho, setCarrinho] = React.useState(0);
  const [notificacao, setNotificacao] = React.useState(null);
  const setTimeoutRef = React.useRef();

  function handleCLick() {
    setCarrinho(carrinho + 1);
    setNotificacao('Item adicionado no carrinho');

    clearTimeout(setTimeoutRef.current);
    setTimeoutRef.current = setTimeout(() => {
      setNotificacao(null);
    }, 2000);
    console.log(setTimeoutRef.current);
  }

  return (
    <div>
      <p>{notificacao}</p>
      <button onClick={handleCLick}>Adicionar carrinho {carrinho}</button>
    </div>
  );
};

export default App;
