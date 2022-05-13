import React from 'react'
import { useSelector } from "react-redux";

export default function PriceOrderSummary() {
    const dataTotalProducts = useSelector((state)=> state.productsSlice.total)
    const renderPrice = Intl.NumberFormat('en-US', {currency: 'USD', style: "currency"}).format(dataTotalProducts)
       
    
  return (
    <div>
        <div className='subcontainer-all-prices'>
            <div className='subcontainer-price-subtotal'>
                <text className='text-subtotal-order-summary'>SUBTOTAL</text>
                <text className='price-subtotal-order-summary'>{renderPrice}</text>
            </div>
            <div className='subcontainer-price-send'>
                <text className='text-subtotal-order-summary'>Envío</text>
                <text className='price-subtotal-order-summary'>{'A calcular'}</text>
            </div>
        </div>
        
        <div className='subcontainer-price-total'>
            <text>Total</text>
            <text> {renderPrice}</text>
        </div>
    </div>
  )
}
