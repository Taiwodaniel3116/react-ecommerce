// import React, { useState } from 'react';

export const AddToCartButton = ({addToCart}) => { 
  return (
    <>
      <button 
        className='bg-amber-300 px-2 py-1 rounded-full'
        onClick={addToCart}
      >add to cart</button>
    </>
  )
}
