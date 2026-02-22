import React from 'react'
import { useForm } from 'react-hook-form'

const EditFrom = ({updatedpost}) => {
    let {register , handleSubmit , formState:{errors}}=useForm()
    console.log(updatedpost);
    
  return (
    <div>
       Hello
    </div>
  )
}

export default EditFrom