import React, { Component } from 'react'
import Tortu from '../images/tortu.png'

class Informacion extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="flex">
        <div className="contenedor-imagen ">
          <img className="imagen-corporacion" src={Tortu} alt="" />
        </div>
        <div className="contenedor-descripcion">
          <div className="nombre-empresaybotones flex">

            <p className="nombre-empresa text-teal-500 font-bold taxt-xs">{this.props.company}</p>

            <button className="boton-new bg-teal-500 text-white font-semibold px-3 rounded-full text-sm ml-2">New</button>
          </div>

          <p className="cargo-en-oferta text-teal-800 font-semibold py-3 text-xl">{this.props.position}</p>
          <div className="tiempo-ubicacion flex text-gray-600">
            <p className="tiempo">{this.props.postedAt}</p>
            <p className="font-bold">&nbsp;·</p>
            <p className="tipo-de-contrato">&nbsp;{this.props.contract}</p>
            <p className="font-bold">&nbsp;·</p>
            <p className="ubicacion">&nbsp;{this.props.location}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Informacion;