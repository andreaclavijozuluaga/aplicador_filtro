import React, { Component } from 'react'

class Atributos extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="atributos flex justify-end items-center ml-5">
        {this.props.languages && this.props.languages.map((language) => {
          return <button class="bg-gray-200 hover:bg-teal-500 text-teal-500 hover:text-white text-sm font-bold py-1 px-4 rounded mr-2">
          {language}
        </button>
        })}
      </div>
    );
  }
}

export default Atributos;