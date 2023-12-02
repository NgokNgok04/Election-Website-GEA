import React from 'react'
import Navbar from '../components/navbar'
import CounterCard from '../components/CounterCard'
const pages = () => {
  return (
    <div className=''>
        <Navbar />
        <div className='h-screen gap-10 flex items-center justify-center'>
          <CounterCard 
            src="/images/livia.jpg"
            nama="Livia"
            nim="12021067" />

          <CounterCard 
            src="/images/emptyBox.jpg"
            nama="Empty Box"
            nim="XXXXXXXX"/>
        </div>

        <button className='fixed w-32 bottom-0 left-1/2 transform -translate-x-1/2 bg-red-600 py-3 rounded-full
          hover:bg-red-700 transition text-white'>
          Suara
        </button>

    </div>
  )
}

export default pages