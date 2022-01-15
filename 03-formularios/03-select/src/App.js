import React from 'react';

const App = () => {
  const [select, setSelect] = React.useState('');

  return (
    <form>
      <select
        value={select}
        onChange={({ target }) => setSelect(target.value)}
        id="produtos"
      >
        <option disabled value="">
          selecione
        </option>
        <option value="notebook">notebook</option>
        <option value="smartphone">smartphone</option>
        <option value="tablet">tablet</option>
      </select>
      {select}
    </form>
  );
};

export default App;
