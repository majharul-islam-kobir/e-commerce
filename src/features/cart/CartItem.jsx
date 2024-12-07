import React from 'react'
import image from "../../assets/images/logo.png"

function CartItem() {
  return (
    <div className='container mx-auto'>
        <div className='grid grid-cols-5 mt-5 my-5 border-b-2 pb-3'>
        <div className='flex justify-center items-center'>
          <p className='font-semibold text-2xl'>Imege</p>
        </div>
        <div className='flex justify-center items-center'>
          <p className='font-semibold text-2xl'>price</p>
        </div>
        
        <div className='flex justify-center items-center'>
          <p className='font-semibold text-2xl'>Quantity</p>
        </div>

        <div className='flex justify-center items-center'>
          <p className='font-semibold text-2xl'>Totle</p>
        </div>
        <div className='flex justify-center items-center'>
          <p className='font-semibold text-2xl'>Totle Summary</p>
        </div>
      </div>

      <div className='grid grid-cols-5'>
        <div className='flex justify-center items-center'>
          <img width={100} src={image} alt="" />
          <p>name</p>
        </div>
        <div className='flex justify-center items-center'>
          <p>price</p>
        </div>
        
        <div className='flex justify-center items-center'>
          <button className='text-5xl m-1'>+</button>
          <button className='text-5xl m-1'>-</button>
        </div>
        <div className='flex justify-center items-center'>
          <p>Totle</p>
        </div>
      </div>
    </div>
  )
}

export default CartItem
