import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { BsFillPersonFill, BsFillEnvelopeFill, BsFillTelephoneFill } from "react-icons/bs";
import { FaMapMarkedAlt } from "react-icons/fa"
import { RiMapPin2Fill } from "react-icons/ri"
import { getPostalCodes } from '../../../../api/getPostalCodes';
import { getFormDataRoundSlice } from '../../../../redux/slices/formDataSlice';


export default function InputsAddresses({register, watch}) {
  const dispatch = useDispatch()
  const getDataRound = useSelector((state)=> state.formDataSlice.roundFormData)
  const getFormData = useSelector((state)=> state.formDataSlice.formData)
  const ValidateEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const ValidateNumber = /^\(?(\d{3})\)?[-]?(\d{3})[-]?(\d{4})$/;
  const ValidatePostalCode = /^[0-9]{5}$/;
  const validateName = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
  const [getDatesOfPostalCode, setgetDatesOfPostalCode] = useState()
  

  useEffect(() => {
    (async()=>{
      if(watch("postalCode") >= 5){
        if(watch("postalCode") == 11000 || watch("postalCode") == 89000){
          try {
            const response = await getPostalCodes(watch("postalCode"))
            setgetDatesOfPostalCode(response)
            dispatch(getFormDataRoundSlice({
              state: response.state,
              Municipality: response.town,
              city: response.city,
              colony: response.colonies
            }))
          } catch (error) {
            console.log(error);
          }
        }else{
          setgetDatesOfPostalCode()
            dispatch(getFormDataRoundSlice({
              state: '',
              Municipality: '',
              city: '',
              colony: ''
            }))
        }
      }
    })()
  }, [watch("postalCode")])  

  return (
    <div className='container-all-inputs'>
        <div className='container-line-left'>
          <div className='input-and-icon-container-addresses'>
            <div className='icon-input-addresses'>
              <BsFillPersonFill/>
            </div>
            <input className={`${getFormData.name ?  null : 'input-error'}`} {...register("name", { pattern: validateName, required: true, maxLength: 20 })} placeholder="Nombre *" />
        
          </div>
          <div  className='input-and-icon-container-addresses'>
            <div className='icon-input-addresses'>
              <BsFillEnvelopeFill/>
            </div>
            <input className={`${getFormData.email ?  null : 'input-error'}`} {...register("email", { pattern: ValidateEmail, required: true })} placeholder="Correo Electrónico *" />
          </div>
          <div className='input-and-icon-container-addresses'>
            <div className='icon-input-addresses'>
              <RiMapPin2Fill/>
            </div>
            <input {...register("postalCode", { pattern: ValidatePostalCode, required: true })} placeholder="Código postal" />
          </div>
          <div className='input-and-icon-container-addresses'>
            <div className='icon-input-addresses'>
              <RiMapPin2Fill/>
            </div>
            <input {...register("state")} defaultValue={getDataRound.state ?? null} placeholder="Estado/Región" />
          </div>
          <div className='input-and-icon-container-addresses'>
            <div className='icon-input-addresses'>
              <RiMapPin2Fill/>
            </div>
            <input {...register("Municipality")} defaultValue={getDataRound.Municipality ?? null} placeholder="Delegación o municipio" />
          </div>
        </div>
        <div className='container-line-right'>
          <div className='input-and-icon-container-addresses'>
            <div className='icon-input-addresses'>
              <BsFillPersonFill/>
            </div>
            <input className={`${getFormData.name ?  null : 'input-error'}`} {...register("lastName", { pattern: validateName, required: true })} placeholder="Apellidos *" />
          </div>
          <div className='input-and-icon-container-addresses'>
            <div className='icon-input-addresses'>
              <BsFillTelephoneFill/>
            </div>
            <input className={`${getFormData.name ?  null : 'input-error'}`} {...register("number", {pattern: ValidateNumber, required: true })} placeholder="Número de teléfono *" />
          </div>
          <div className='input-and-icon-container-addresses'>
            <div className='icon-input-addresses'>
              <RiMapPin2Fill/>
            </div>
            {getDatesOfPostalCode?.colonies.length > 1 ?
                <select {...register("category")}>
                    {
                      getDatesOfPostalCode?.colonies.map((item, index)=>{
                        return(<option key={index} value={`${item}`}>{item}</option>)
                      })
                    }
                 </select>
              :
              <input {...register("colony")} defaultValue={getDataRound.colony ?? null} placeholder="Colonia" />
            }
          </div>
          <div className='input-and-icon-container-addresses'>
            <div className='icon-input-addresses'>
              <RiMapPin2Fill/>
            </div>
            <input {...register("city")} defaultValue={getDataRound.city ?? null} placeholder="Ciudad"/>
          </div>
          <div className='input-and-icon-container-addresses'>
            <div className='icon-input-addresses'>
              <FaMapMarkedAlt/>
            </div>
            <input {...register("street")} placeholder="Calle" />
          </div>
        </div>
    </div>
  )
}
