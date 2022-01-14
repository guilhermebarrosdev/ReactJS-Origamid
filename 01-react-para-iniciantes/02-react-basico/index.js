<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React Para Iniciantes</title>

  <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
  <script crossorigin src="https://unpkg.com/@babel/standalone@7/babel.min.js"></script>
</head>

<body>
  <div id="app"></div>

  <script type="text/babel">

    const Compras = () => {
      const [contador, setContador] = React.useState(0);
      console.log(contador);
      function comprar() {
        setContador(contador + 1);
      }

      return (
        <div>
          <button onClick={comprar}>Comprar</button>
          <p>Total: {contador}</p>
          <p>Preço: R$ {contador * 250}</p>
        </div>
      )
    }


    const Button = () => {
      function handleClick(event) {
        console.log(event.target.innerText);
      }

      return <button onClick={handleClick}>Comprar</button>
    }

    const Titulo = () => {
      const numero = Math.random() * 1000;
      return <h1>Meu Título {numero}</h1>
    }

    const App = () => {
      return <div>Meu App
      <Compras />
        <Titulo />
        <Button />
        <div>
          Compre aqui também.
          <Button />
        </div>
      </div>
    }

    ReactDOM.render(<App />, document.getElementById('app'))
  </script>
</body>

</html>