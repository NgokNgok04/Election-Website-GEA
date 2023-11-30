import React from 'react'
const playbutton = () => {
  return (
    <div>
        <button 
            className='
            bg-white
            rounded-md
            py-2 md:py-2
            px-6 md:px-6
            w-auto
            text-lg
            font-semibold
            flex
            flex-row
            item-center
            hover:bg-neutral-300
            transition
            align-middle
        '>
            <img src='../images/play-button.png' className='mr-1 h-6' /> 
            <p className='align-middle'> Play </p>
        </button>
    </div>
  )
}

export default playbutton

{/* <button className='
mt-3
text-4xl
bg-white
rounded-xl
font-medium
tracking-normal
px-5
o
font-sans
justify'>
  <img src='/images/play-button.png'
  className='h-8 flex '/>
   Play 
   </button> */}