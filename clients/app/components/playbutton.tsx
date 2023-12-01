import React , {useState} from 'react'
import Input from './inputtoken';
const playbutton = () => {
  const [password,setPassword] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const handleClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    };
  

  return (
    <div>
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
        {showPopup && (
            <div>
                <div className='bg-black sm:bg-black sm:bg-opacity-70 px-16 py-16 self-center mt-2 max-w-md rounded-md w-full fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    <h2 className='text-white text-4xl mb-8 font-semibold'>
                        Masukkan token
                    </h2>
                    <Input
                        label ="Token"
                        onChange ={(ev:any) => setPassword(ev.target.value)}
                        id = "password"
                        type="password"
                        value={password}
                    />
                </div>
            </div>
        )}
    </div>
  )
}

export default playbutton