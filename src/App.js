import React, { Component } from 'react';
import Mesa from './Mesa'
import './App.css';
const { take, takeLast, tail } = require('ramda')
const { shuffle } = require('lodash')
const personas = [
  'Manu',
  'Rodrigo',
  'Nico',
  'Diego Bueno',
  'Naty',
  'Héctor',
  'Fran',
  'Javi',
  'Balta',
  'Erick',
  'Diego Malo',
  'Oscar',
  'Claudio',
  'Camilo',
  'Guga',
  'Vignaga'
]

class App extends Component {
  state = {
    personas,
    running: false,
    runned: false
  }

  desorden = () => {
    this.setState({
      running: true
    })
    let personas = this.state.personas
    let counter = 0;
    for ( let i = 10; i < 1000; i*=4) {
      let interval = setInterval(() => {
        this.setState({
          personas: shuffle(personas)
        })
      }, i);
      counter += (8 * i)
      setTimeout(() => {
        clearInterval(interval)
      }, counter)
    }
    setTimeout(() => {
      this.setState({
        running: false
      })

      let manu = this.state.personas.indexOf('Manu')
      let ps = swap(this.state.personas, 0, manu)
      this.setState({
        personas: [ps[0], ...shuffle(tail(ps))]
      })
    }, counter)
  }

  render() {
    return (
      <div className='container'>
        <div className='grid'>
          <Mesa n={1} personas={take(8, this.state.personas)}/>
          <Mesa n={2} personas={takeLast(8, this.state.personas)}/>
        </div>
        <button className='button' onClick={this.desorden}>
          {this.state.running ? 'DESORDENANDOO' : 'Desordénalos' }
        </button>
      </div>
    );
  }
}

export default App;

function swap (arr, pos1, pos2) {
  let temp = arr[pos1]
  arr[pos1] = arr[pos2]
  arr[pos2] = temp
  return arr
}