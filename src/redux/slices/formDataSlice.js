import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  roundFormData: {},
  formData: {},
  postalCode: {},
}

export const formDataSlice = createSlice({
  name: 'roundFormData',
  initialState,
  reducers: {
    getFormDataRoundSlice:(item, action) => {
      item.roundFormData = {
        state: action.payload.state,
        Municipality: action.payload.Municipality,
        city: action.payload.city,
        colony: action.payload.colony[0]
      }
    },
    getFormDataSlice: (item, action) => {
      item.formData = action.payload
    },
    getPostalCode: (item, action)=>{
      item.postalCode = action.payload
    }
  },
})


export const { getFormDataSlice, getPostalCode, getFormDataRoundSlice } = formDataSlice.actions

export default formDataSlice.reducer 