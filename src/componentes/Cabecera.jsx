import React, { Component } from 'react'
import Fondo from '../images/fondo.jpg'

class Cabecera extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    return (
      <div className="contenedor-cabecera">
        <img src={Fondo} alt=""/>
      </div>
    );
  }
}

export default Cabecera;