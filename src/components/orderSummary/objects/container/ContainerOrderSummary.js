import React from 'react'
import HeaderOrderSummary from '../../atoms/header/HeaderOrderSummary'
import PriceOrderSummary from '../../molecules/price/PriceOrderSummary'
import ProductListOrderSummary from '../../molecules/productList/ProductListOrderSummary'

export default function ContainerOrderSummary() {
  return (
      <div className='container-order-summary'>
        <HeaderOrderSummary/>
        <ProductListOrderSummary/>
        <PriceOrderSummary/>
      </div>
  )
}
