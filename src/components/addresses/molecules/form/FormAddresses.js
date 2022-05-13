import React from 'react'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { registerApi } from '../../../../api/user';
import { getFormDataSlice } from '../../../../redux/slices/formDataSlice';
import ButtonsAddresses from '../../atoms/buttons/ButtonsAddresses'
import CheckBoxAddresses from '../../atoms/buttons/CheckBoxAddresses';
import InputsAddresses from '../../atoms/inputs/InputsAddresses'

export default function FormAddresses() {
  const dispatch = useDispatch()
  const getDataRound = useSelector((state)=> state.formDataSlice.roundFormData)
  const formData = useSelector((state)=> state.formDataSlice.formData)
  const {register, handleSubmit, watch } = useForm();
  
  const handleSubmitFormData = async (data)=> {
    const responsePostalCode = await {...getDataRound}
    dispatch(getFormDataSlice(JSON.stringify({...data, ...responsePostalCode})))
    console.log(formData, 'responseFormData finality');
    const response = await registerApi(formData)
    console.log(response.status, 'response');
    if(response.status > 200 && response.status < 299){
        alert('has registrado tu direccion de una forma correcta')
    }else{
      alert('no registrado tu direccion')
    }
  }
  

  return (
      <form className='container-form-addresses' onSubmit={handleSubmit((data) => handleSubmitFormData(data))}>
      <InputsAddresses register={register} watch={watch}/>
      <ButtonsAddresses/>
      <CheckBoxAddresses register={register}/>
      </form>
    
  )
}
