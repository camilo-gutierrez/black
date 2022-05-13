import {API_URL_POST_DATA} from "../utils/constants"

export async function registerApi(formData){
    try{
        console.log(formData, 'fordata consult');
         const url = `${API_URL_POST_DATA}`;
         const params = {
             method: 'POST',
             headers:{
                "Content-Type": "application/json",
             },
             body: JSON.stringify(formData),
         };
         const response = await fetch(url, params);
         const result = await response;
         return result;
    } catch(error){
         console.log(error)
         return null;
    }
}