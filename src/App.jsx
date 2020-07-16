import React, { Component } from 'react';
import './App.css';
import Cabecera from './componentes/Cabecera.jsx'
import Tarjeta from './componentes/Tarjeta';
import trabajoData from './data.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trabajos: trabajoData
    };
  }
  render() {
    return (
      <div className="App">
        <Cabecera />
        <div className="flex justify-center">
          <input className="mt-3 px-10 py-1 border " type="text" onChange={this.handleInput} />
          
        </div>
        {this.state.trabajos && this.state.trabajos.map((trabajo) => {
          return <Tarjeta trabajo={trabajo} />
        })}
      </div>
    );
  }
  handleInput = (e) => {
    console.log('odio la programación :D')

  }

}

export default App;

