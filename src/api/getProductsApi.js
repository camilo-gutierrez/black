import {API_URL_PRODUCTS} from "../utils/constants"

 export async function getProductsApi(){
     try {
         const url = `${API_URL_PRODUCTS}`
         const response = await fetch(url)
         const result = response.json()
         return result
     } catch (error) {
         return null
     }
 }