import React from 'react';
import Input from './Form/Input';
import Select from './Form/Select';

const App = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [produto, setProduto] = React.useState('');

  return (
    <div>
      <form>
        <Select
          options={['smartphone', 'tablet']}
          value={produto}
          setValue={setProduto}
        />
        <Input label="Nome" value={nome} setValue={setNome} required />
        <Input label="Email" value={email} setValue={setEmail} />
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default App;
