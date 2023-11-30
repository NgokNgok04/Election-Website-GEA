import React from 'react'
import Swal from 'sweetalert2';
const playbutton = () => {
    async function handleClick(){
        const { value: password } = await Swal.fire({
            position: 'bottom',
            title: "Enter your password",
            input: "password",
            inputLabel: "Password",
            inputPlaceholder: "Enter your password",
            inputAttributes: {
              maxlength: "10",
              autocapitalize: "off",
              autocorrect: "off"
            }
          });
    }
  return (
    <button onClick={handleClick}
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
  )
}

export default playbutton