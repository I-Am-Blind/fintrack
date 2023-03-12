import React from 'react'

const Card = ({name,plan,price}) => {
  return (
    <div className='card w-[12rem]  h-[10rem] rounded-lg text-white font-primary flex flex-col justify-between px-4 py-4 shadow-xl '>
    <div>
    <h3 className='font-bold text-2xl'>{name}</h3>
    <h5 className='font-extralight opacity-60 text-sm'>{plan}</h5>
    </div>
    <div className='text-lg'>
      Rs <span className='font-bold'> {price}</span>
    </div>
   </div>
  )
}

export default Card