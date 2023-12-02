import React, {useState} from 'react'
import Link from 'next/link';
interface InputProps{
    id: string;
    onChange: any;
    value: string;
    label: string;
    type?: string;
}
const inputtoken: React.FC<InputProps> = ({
    id,
    label,
    type,
}) => {
    const [token, setToken] = useState('');
    const handleTokenSubmit = (ev:any) => {
      ev.preventDefault();
  
      const isValidToken = validateToken(token);
      if (isValidToken) {
      }
    }
  
    const validateToken = (token: any) => {
      return token === '2PGV5W8G'
    };
    return (
        <div className="relative">
            <input
                onChange={(e) => setToken(e.target.value)}
                type={type}
                id= {id}
                className="
                    block
                    rounded-md
                    px-6
                    pt-6
                    pb-1
                    w-full
                    text-md
                    text-white
                    bg-neutral-700
                    appearance-none
                    focus:outline-none
                    focus:ring-0
                    peer
                "
                placeholder=' '
            />
            <label 
                className="
                    absolute
                    text-md
                    text-zinc-400
                    duration-150
                    transform
                    -translate-y-3
                    scale-75
                    top-4
                    z-10
                    origin-[0]
                    left-6
                    peer-placeholder-shown:scale-100
                    peer-placeholder-shown:translate-y-0
                    peer-focus:scale-75
                    peer-focus:-translate-y-3
                "
                htmlFor={id}>
                    {label}
            </label>

            <button 
                onSubmit={handleTokenSubmit}
                className='bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition'>
                Submit
            </button>
        </div>
  )
}

export default inputtoken