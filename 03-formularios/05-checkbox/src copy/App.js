import React from 'react';

const App = () => {
  const [termos, setTermos] = React.useState(false);

  return (
    <form>
      {termos && <p>Aceitou os termos.</p>}
      <label htmlFor="">
        <input
          type="checkbox"
          value="termos"
          checked={termos}
          onChange={({ target }) => setTermos(target.checked)}
        />
        Li e aceito todos os termos.
      </label>
    </form>
  );
};

export default App;
