<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React Para Iniciantes</title>

  <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
  <script crossorigin src="https://unpkg.com/@babel/standalone@7/babel.min.js"></script>
</head>

<body>
  <div id="app-javascript">
    <p>Total: <span id="total"></span></p>
    <p>Preco: R$ <span id="preco"></span></p>
    <button id="button">Comprar</button>
  </div>
  <script type="application/javascript">
    const total = document.getElementById('total');
    const preco = document.getElementById('preco');
    const button = document.getElementById('button');

    let contador = 1;

    function atualizarValores(contador) {
      total.innerText = contador;
      preco.innerText = contador * 250;
    }
    atualizarValores(contador);

    function handleClick() {
      contador = contador + 1;
      atualizarValores(contador);
    }
    button.addEventListener('click', handleClick);
  </script>

  <div id="app-react"></div>

  <script type="text/babel">
    const Comprar = () => {
      const [contador, setContador] = React.useState(1);

      return (
        <div>
          <p>Total: {contador}</p>
          <p>Preço: R$ {contador * 250}</p>
          <button onClick={() => setContador(contador + 1)}>Comprar</button>
        </div>
      )
    }

    ReactDOM.render(<Comprar />, document.getElementById('app-react'));
  </script>

</body>

</html>