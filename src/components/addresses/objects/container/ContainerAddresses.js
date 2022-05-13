import React from 'react'
import HeaderAddresses from '../../atoms/header/HeaderAddresses'
import FormAddresses from '../../molecules/form/FormAddresses'

export default function ContainerAddresses() {
  return (
      <div className='container-addresses'>
        <HeaderAddresses/>
        <FormAddresses/>
      </div>
  )
}
