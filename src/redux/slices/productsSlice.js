import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  product: 0,
  total: 0
}

export const produtsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getproduct: (item, action) => {
      item.product = action.payload
    },
    totalProduct: (item, action)=>{
      const sumaTotal =()=> {
          if(action.payload.length > 0){
            let countIterator = action.payload.length
            let countTotal = 0
            for(let i = 0; i < countIterator; i++){
              countTotal = parseFloat(countTotal) + parseFloat(action.payload[i].price)
            }
            return countTotal
          }
        } 
      item.total = sumaTotal()
    }
  },
})


export const { getproduct, totalProduct } = produtsSlice.actions

export default produtsSlice.reducer