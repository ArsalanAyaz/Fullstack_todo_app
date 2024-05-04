import React from 'react'
import InputField from '../inputField';

const Page = ({params}:{params:{id:string}}) => {
  return (
    <div>
      <h1>update your task here {params.id}</h1>
      <InputField text='Update' id={Number(params.id)}/>
    </div>
  )
}

export default Page;
