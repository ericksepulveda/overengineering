import React from 'react';
import Fila from './Fila'
const { take, takeLast } = require('ramda')

function Mesa(props) {
  const { personas, n } = props
  return <div className={`mesa-${n}`}>
      <Fila personas={take(4, personas)}/>
      <Fila personas={takeLast(4, personas)}/>
    </div>
}

export default Mesa;
