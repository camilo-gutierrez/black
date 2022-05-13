import {API_URL_POSTAL_CODE} from "../utils/constants"

 export async function getPostalCodes(code){
     try {
         const url = `${API_URL_POSTAL_CODE}/${code}`
         const response = await fetch(url)
         const result = response.json()
         return result
     } catch (error) {
         return null
     }
 }