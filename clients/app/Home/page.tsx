"use client";
import React from 'react'
import Navbar from '../components/navbar'
const page = () => {
  return (
    <div className="relative h-full w-full bg-[url('/images/backgroundnew.png')] bg-no-repeat bg-center bg-left bg-cover">
      <Navbar />
      <div className='absolute top-[30%] md:top-[20%] ml-4 md:ml-16'>
        <p className='
          text-white 
          text-7xl 
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
          text-4xl
          mt-3
          md:mt-8
          w-[100%]
          drop-shadow-xl
          font-GillSans
          tracking-widest'>
          H M T G " G E A " I T B
        </p>
        <div>
          <button className='
          mt-3
          text-4xl
          bg-white
          rounded-xl
          font-medium
          tracking-normal
          px-5
          o
          font-sans'> Play </button>
        </div>
      </div>
    </div>
  )
}

export default page