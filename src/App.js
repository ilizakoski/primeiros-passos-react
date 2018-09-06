import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      contador: 0
    }
  }

  render() {
    const estado = this.state.contador;

    return (
      <div className="App">
        <p className="App-intro">
          <span> Contador </span>
          <span> Valor: </span>
          <span> {estado} </span>
          <div class="margin-top-15">
            <button onClick={() => this.setState({ contador: estado + 1 })}>Aumenta um</button>
            <button onClick={() => this.setState({ contador: estado - 1 })}>Diminui um</button>
          </div>
          <div class="margin-top-15">
            <input type="text" value={estado} />
          </div>
        </p>
        <p>
          <ComponenteDois />
        </p>
      </div>
    );
  }
}

class ComponenteDois extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          <span>Desculpa hahaha</span>
        </p>
      </div>
    );
  }
}

export default App;

// toda vez que eu coloco isso {} 
// eu quero dizer que to colocando codigo no meio do html

// só tem 2 coisas muuuuito importante pra aprender no react
// 1) estado <- bora lá!
// 2) prop (propriedades)

// cada componente tem um estado, vamos utilizar esse estado para esse exercicio