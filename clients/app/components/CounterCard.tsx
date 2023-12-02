import React from 'react'

interface CounterCardProps {
    src: string;
    nama: string;
    nim: string;
    vote: string;
}
const CounterCard: React.FC<CounterCardProps> = ({src,nama,nim,vote}) => {
  return (
    <div className='bg-white text-gray-700 w-72 min-h-[10rem] shadow-lg rounded-md overflow-hidden'>
        <img src={src} alt={nama} className='w-full h-full object-cover'/>

        <div className='p-5 flex-col gap-3'>
          <div className='flex items-center gap-2'>
            <span className='px-2 py-1 rounded-full text-xl bg-gray-100'> {nama} </span>
            <span className='px-2 py-1 rounded-full text-xl bg-gray-100'> {nim}</span>
            <span className='px-2 py-1 rounded-full text-xl bg-gray-100'> {vote}</span>
          </div>
        </div>
    </div>
  )
}

export default CounterCard