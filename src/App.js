import React, { Component } from "react";
import './App.css';
//Importando componentes..

import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { ClearButton } from "./components/ClearButton";
//Math para hacer cuentas matemáticas sin necesidad de crear funciones.
import * as math from 'mathjs'


class App extends Component {
  constructor(props) {
    super(props);
//Declarando el estado del imput.! (en este caso está vacío.)

    this.state = {
      input: ""
      
    };
    
    this.addToInput = this.addToInput.bind(this);
  }


//Input es igual a el this.state de arriba (que está vacío);
//y lo modifica a this.state + el valor del input que agregue el usuario.
  addToInput = val => {
    this.setState({ input: this.state.input + val });
    
  }

  //Usa el Math.js para hacer una ecuasión por cada vez que presionen = 
  handleEqual = () => {
   
    this.setState({ input: math.evaluate(this.state.input) });
  };

//Renderiza toda la app con los componentes que hacen sus respectivas funciones.
  render() {
    return (
      <div className="app">
        <div className="calc-wrapper">
          <Input input={this.state.input}></Input>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.addToInput}>/</Button>
          </div>
          
          <div className="row">
           
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.addToInput}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>.</Button>
            <Button handleClick={this.addToInput}>0</Button>
            <Button handleClick={() => this.handleEqual()}>=</Button>
            <Button handleClick={this.addToInput}>-</Button>
          </div>

          <div className="row">
            <ClearButton handleClear={
              () => this.setState(
                { input: '' })}>
              Borrar.
            </ClearButton>
          </div>

        </div>
      </div>
    );
  }

}

export default App;
