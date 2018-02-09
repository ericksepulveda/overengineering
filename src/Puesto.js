import React from 'react';

function Puesto (props) {
  const { owner } = props
  return <div className='puesto'>
      <div className='d'>
        {owner}
      </div>
    </div>
}
export default Puesto;
