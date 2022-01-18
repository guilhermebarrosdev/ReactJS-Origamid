import React from 'react';
import Input from './Form/Input';
import Radio from './Form/Radio';
import Select from './Form/Select';

const App = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('');
  const [fruta, setFrutas] = React.useState('');

  return (
    <form>
      <h2>Cores</h2>
      <Radio options={['Azul', 'Vermelho']} value={cor} setValue={setCor} />
      <h2>Frutas</h2>
      <Radio
        options={['Banana', 'Morango', 'Uva', 'Laranja']}
        value={fruta}
        setValue={setFrutas}
      />
      <Select
        options={['smartphone', 'tablet']}
        value={produto}
        setValue={setProduto}
      />
      <Input label="Nome" value={nome} setValue={setNome} required />
      <Input label="Email" value={email} setValue={setEmail} />
      <button>Enviar</button>
    </form>
  );
};

export default App;
