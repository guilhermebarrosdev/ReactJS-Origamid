import React from 'react';

const App = () => {
  const [comentarios, setComentarios] = React.useState([]);
  const [input, setInput] = React.useState('');
  const inputElement = React.useRef();

  function handleClick() {
    setComentarios([...comentarios, input]);
    setInput('');
    inputElement.current.focus();
  }

  return (
    <div>
      <ul>
        {comentarios.map((comentario) => (
          <li key={comentario}>{comentario}</li>
        ))}
      </ul>
      <br />
      <input
        type="text"
        ref={inputElement}
        value={input}
        placeholder="Digite seu comentário"
        onChange={({ target }) => setInput(target.value)}
      />
      <br />
      <button type="submit" onClick={handleClick}>
        Enviar
      </button>
    </div>
  );
};

export default App;
