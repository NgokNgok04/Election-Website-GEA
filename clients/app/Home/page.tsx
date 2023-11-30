"use client";
import React from 'react'
import Navbar from '../components/navbar'
const page = () => {
  return (
    <div className="relative h-full w-full bg-[url('/images/backgroundnew.png')] bg-no-repeat bg-left bg-fixed bg-cover">
      <Navbar />
      <div className='absolute top-[30%] md:top-[20%] ml-4 md:ml-16'>
        <p className='
          text-white 
          text-xl 
          md:text-7xl 
          h-full
          w-[100%] 
          lg:text-8xl 
          font-bold 
          drop-shadow-xl
          font-GillSans
          tracking-widest
          '>
           P E M I L U ' 2 3
        </p>
        <p className='
        text-white 
        text-[8xl]
        md:text-4xl
        mt-3
        md:mt-8
        w-[100%]
        md:w-[80%]
        lg:w-[50%]
        drop-shadow-xl
        font-GillSans
        letter
        '>
          H M T G " G E A " I T B
        </p>
        <p className=' '></p>
      </div>
    </div>
  )
}

export default page