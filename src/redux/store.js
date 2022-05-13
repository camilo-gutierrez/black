import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import productsSlice from './slices/productsSlice'
import formDataSlice from './slices/formDataSlice'

const rootReducer = combineReducers({
    productsSlice,
    formDataSlice
})

export const store = configureStore({
  reducer: rootReducer
})