"use client";
import React, { useCallback, useState } from 'react'
import Input from '../components/input'
const page = () => {
    const [email,setEmail] = useState('');
    const [nim,setNIM] = useState('');
    const [password,setPassword] = useState('');


    return (
        <div className="relative h-full w-full bg-[url('/images/newbg.png')] bg-no-repeat bg-center" >
            <div className='bg-black w-full h-full lg:bg-opacity-50'>
                <nav className='px-12 py-5 flex justify-center' >
                    <img src="/images/logoGEA.png" alt="Logo" className='h-12 self-center'/>
                </nav>
                <div className='flex justify-center'>
                    <div className='bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full'>
                        <h2 className='text-white text-4xl mb-8 font-semibold'>
                            Login
                        </h2>
                        <div className='flex flex-col gap-4'>
                            <Input 
                                label ="NIM"
                                onChange ={(ev:any) => setNIM(ev.target.value)}
                                id = "name"
                                value={nim}
                            />
                            <Input 
                                label ="Email"
                                onChange ={(ev:any) => setEmail(ev.target.value)}
                                id = "email"
                                type="email"
                                value={email}
                            />
                            <Input 
                                label ="Password"
                                onChange ={(ev:any) => setPassword(ev.target.value)}
                                id = "password"
                                type= "password"
                                value={password}
                            />

                            <button className='bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition'>
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}   

export default page