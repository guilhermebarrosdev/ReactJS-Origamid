import React from 'react';
import useFetch from './useFetch';

const App = () => {
  const { request, data, loading, error } = useFetch();

  React.useEffect(() => {
    async function fetchData() {
      const obj = await request(
        'https://ranekapi.origamid.dev/json/api/produto/'
      );
    }
    fetchData();
  }, [request]);

  if (error) return <p>{error}</p>;
  if (loading) return <h1>Carregando ...</h1>;
  if (data)
    return (
      <div>
        {data.map((produto) => (
          <div key={produto.id}>
            <h1>{produto.nome}</h1>
          </div>
        ))}
      </div>
    );
  else return null;
};

export default App;
