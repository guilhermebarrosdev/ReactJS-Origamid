import React from 'react';
import Input from './Form/Input';

const App = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');

  return (
    <div>
      <form>
        <Input label="Nome" value={nome} setValue={setNome} required />
        <Input label="Email" value={email} setValue={setEmail} />
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default App;
