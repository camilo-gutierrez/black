import React, {useEffect} from 'react'
import { getProductsApi } from '../../../../api/getProductsApi'
import { useDispatch, useSelector } from "react-redux";
import { getproduct, totalProduct } from '../../../../redux/slices/productsSlice';
import ButtonsOrderSummary from '../../atoms/buttons/ButtonsOrderSummary'
import ProductOrderSummary from '../../atoms/product/ProductOrderSummary'

export default function ProductListOrderSummary() {
  const dispatch = useDispatch();
  const dataProducts = useSelector((state)=> state.productsSlice.product)

    useEffect(() => {
      (async()=> {
          const response = await getProductsApi()
          dispatch(getproduct(response))
          dispatch(totalProduct(response))
      })()
    }, [])
    
  return (
      <div className='container-orders-summary-list'>
        {dataProducts && dataProducts.map((item, index)=> (
            <ProductOrderSummary key={index} data={item} />
        ))}
            <ButtonsOrderSummary/>
      </div>
  )
}
