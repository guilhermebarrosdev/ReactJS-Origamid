import React from 'react';

class Produtos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contar: 0,
    };
    this.handleCLick = this.handleCLick.bind(this);
  }

  componentDidMount() {
    console.log('montou agora');
  }

  componentDidUpdate() {
    document.title = this.state.contar;
  }

  componentWillUnmount() {
    console.log('saiu da tela');
  }

  handleCLick() {
    this.setState((state) => ({ contar: state.contar + 1 }));
  }
  render() {
    return (
      <div>
        <h1>{this.props.titulo}</h1>
        <p>{this.state.contar}</p>
        <button onClick={this.handleCLick}>Adicionar</button>
      </div>
    );
  }
}
export default Produtos;
