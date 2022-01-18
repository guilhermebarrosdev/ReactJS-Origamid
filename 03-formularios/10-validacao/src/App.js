import React from 'react';
import Input from './Form/Input';

const App = () => {
  const [cep, setCep] = React.useState('');
  const [error, setError] = React.useState(null);

  const validadeCep = (value) => {
    if (value.length === 0) {
      setError('Preencha esta campo');
      return false;
    } else if (!/^\d{5}-?\d{3}$/.test(value)) {
      setError('Preencha um CEP valido');
      return false;
    } else {
      setError(null);
      return true;
    }
  };

  const handleBlur = ({ target }) => {
    validadeCep(target.value);
  };

  const handleChange = ({ target }) => {
    if (error) validadeCep(target.value);
    setCep(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validadeCep(cep)) {
      console.log('Enviou');
    } else {
      console.log('Não enviou');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          label="CEP"
          id="cep"
          type="text"
          value={cep}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="00000-000"
        />
        {error && <p>{error}</p>}
        <button>Enviar</button>
      </form>
    </>
  );
};

export default App;
