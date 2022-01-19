import React from 'react';
import styled from 'styled-components';

const ProdutosContainer = styled.div`
  display: flex;
`;

const Produto = styled.div`
  flex: 1;
`;

const Titulo = styled.h1`
  font-size: 3rem;
  color: teal;
  font-weight: bold;
`;

const Paragrafo = styled.p`
  font-size: 2rem;
  color: red;
  background: hsl(${Math.random() * 360}, 100%, 50%);
`;

const Preco = styled.p`
  background: ${({ cor }) => cor};
  color: white;
`;

const Comprar = styled.button`
  background: ${({ ativo }) => (ativo ? '#000' : '#eee')};
  font-size: 1rem;
  border: 2px solid #000;
  border-radius: 8px;
  padding: 0.5rem;
  color: ${({ ativo }) => (!ativo ? '#000' : '#eee')};
  cursor: pointer;
  &:hover {
    background: tomato;
  }
`;

const App = () => {
  const [ativo, setAtivo] = React.useState(false);

  const handleClick = () => {
    setAtivo(!ativo);
  };

  return (
    <div>
      <ProdutosContainer>
        <Produto>
          <Titulo>Notebook</Titulo>
          <Preco cor="#000">R$ 2000</Preco>
          <Paragrafo>meu paragrafo</Paragrafo>
          <Comprar ativo={ativo} onClick={handleClick}>
            Comprar
          </Comprar>
        </Produto>
        <Produto>
          <Titulo>Smartphone</Titulo>
          <Preco cor="blue">R$ 1000</Preco>
          <Paragrafo>meu paragrafo</Paragrafo>
        </Produto>
      </ProdutosContainer>
    </div>
  );
};

export default App;
