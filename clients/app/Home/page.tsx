"use client";
import React from 'react'
import Navbar from '../components/navbar'
const page = () => {
  return (
    <div className="relative h-full w-full bg-[url('/images/background.png')] bg-no-repeat bg-center bg-fixed bg-cover">
      <Navbar />
      <div className='absolute top-[30%] md:top-[40%] ml-4 md:ml-16'>
        <p className='
          text-white 
          text-xl 
          md:text-5xl 
          h-full 
          w-[100%] 
          // lg:text-4xl 
          font-bold 
          drop-shadow-xl'>
          PEMILU '23
        </p>
      </div>
    </div>
  )
}

export default page