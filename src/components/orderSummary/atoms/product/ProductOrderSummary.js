import React from 'react'


export default function ProductOrderSummary({data}) {
  return (
    <div className='container-product-order-summary'>
        <div className='container-image-product-order-summary'>
           <img className='image-product-order-summary' src={data.image}/> 
        </div>
        <div className='container-name-product-order-summary'>
            <text>{data.name}</text>
        </div>
        <div className='container-price-product-order-summary'>
           <text>{Intl.NumberFormat('en-US', {currency: 'USD', style: "currency"}).format(data.price)}</text> 
        </div>
    </div>
  )
}
