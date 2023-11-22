import React from 'react'

export default function Card() {
  return (
    <div className='border-[1px] pb-3 rounded border-slate-100 shadow-lg h-full group relative overflow-hidden bg-white transition transform duration-500 text-center'>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src='https://demo.smartaddons.com/templates/html/autoparts/image/catalog/demo/product/270/4.jpg'
        alt='produc'
        className='w-full h-44 sm:h-auto'
      />

      <button className='bg-primary w-full text-white px-4 py-2 transition duration-500 transform translate-y-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0'>
        Add to Cart
      </button>
      <h1 className='text-xl font-semibold'>X COROLLA HL</h1>
      <h2 className='text-lg text-secondary font-semibold'>5000</h2>
    </div>
  )
}
