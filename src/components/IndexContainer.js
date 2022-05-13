import React from 'react'
import ContainerAddresses from './addresses/objects/container/ContainerAddresses'
import ContainerOrderSummary from './orderSummary/objects/container/ContainerOrderSummary'
import "../sass/index.scss"

export default function IndexContainer() {
  return (
    <scroll>
      <div className='container'> 
        <ContainerAddresses/>
        <ContainerOrderSummary/>
      </div>
    </scroll>
    
  )
}
