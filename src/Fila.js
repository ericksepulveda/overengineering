import React from 'react';
import Puesto from './Puesto'

function Fila (props) {
  const { personas } = props
  return <div className='fila'>
    {personas.map(o => <Puesto key={o} owner={o}/>)}
    </div>
}
export default Fila;