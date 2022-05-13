import React from 'react'

export default function CheckBoxAddresses({register}) {
  return (
    <div className='input-and-icon-container-addresses'> 
        <input type={'checkbox'} {...register("checkAddresses")} />
        <text>Utilizar como dirección de facturación</text>
    </div>
  )
}
