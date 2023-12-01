"use client";
import React from 'react'
import Navbar from '../components/navbar'
import PlayButton from '../components/playbutton'
import Plusbutton from '../components/plusbutton';
import Likebutton from '../components/likebutton';
const page = () => {
  return (
    <div className="relative h-full w-full bg-[url('/images/backgroundnew.png')] bg-no-repeat bg-center bg-cover">
      <Navbar />
      <div className='absolute top-[30%] md:top-[20%] ml-4 md:ml-16'>
        <p className='
          text-white 
          text-6xl sm:text-7xl 
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
        <div className='flex flex-row items-center gap-5 mt-5 align-middle'>
          <PlayButton />
          <Plusbutton />
          <Likebutton />
        </div>
        <div className='flex flex-row gap-5 mt-5'>
          <p className='text-green-400 font-semibold tracking-widest'>
            New <span className='text-neutral-400'> 2023</span>
          </p>
          <p className='text-neutral-400 font-semibold tracking-widest'>
            1h 9m 55s
          </p>
        </div>
        <div className='flex flex-row gap-5 mt-5'>
          <p className='text-red-500 font-semibold text-3xl tracking-widest'> #1 <span className='text-white'> in Movies Today </span> </p>
        </div>
      </div>
    </div>
  )
}

export default page