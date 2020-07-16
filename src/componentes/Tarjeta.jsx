import React, { Component } from 'react';
import '../Tarjeta.css';
import Informacion from './Informacion.jsx';
import Atributos from './Atributos.jsx'

class Tarjeta extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    return (
      <div className="contenedor-tarjeta rounded justify-between flex">
         <Informacion logo={this.props.trabajo.logo} company={this.props.trabajo.company} position={this.props.trabajo.position} postedAt={this.props.trabajo.postedAt} contract={this.props.trabajo.contract} location={this.props.trabajo.location}/>
         <Atributos languages={this.props.trabajo.languages}/>
      </div>
     );
  }
}

export default Tarjeta;