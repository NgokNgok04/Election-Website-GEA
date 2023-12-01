"use client";
import React, { useCallback, useState } from 'react'
import Input from '../components/input'
import { signIn, useSession } from 'next-auth/react';
import { redirect, useRouter } from 'next/navigation';
import credentials from 'next-auth/providers/credentials';
import { error } from 'console';
const page = () => {
    const [email,setEmail] = useState('');
    const [nim,setNIM] = useState('');
    const [password,setPassword] = useState('');
    const router = useRouter();
    const [data, setData] = useState({
        username: "",
        password: ""
    });

    const {data: session} = useSession();
    console.log(session);

    const handleLogin = async (e: any) => {
        e.preventDefault();
        const sesuatu = {
            username: nim,
            password: password
        };
        console.log(sesuatu);
        setData(sesuatu);
        const res = signIn('credentials',{
          username: sesuatu.username,
          password: sesuatu.password,
          redirect: true,
          callbackUrl:'/Home'
        })
    }
    
    return (
        <div className="relative h-full w-full bg-[url('/images/newbg.png')] bg-no-repeat bg-center bg-fixed bg-cover" >
            <div className='bg-black w-full h-full lg:bg-opacity-50'>
                <nav className='px-12 py-5 flex justify-center' >
                    <img src="/images/logoGEA.png" alt="Logo" className='h-12 self-center'/>
                </nav>
                <div className='flex justify-center'>
                    <div className='bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full'>
                        <h2 className='text-white text-4xl mb-8 font-semibold'>
                            Login
                        </h2>
                        <form className='flex flex-col gap-4' onSubmit={handleLogin}>
                            <Input 
                                label ="NIM"
                                onChange ={(ev:any) => setNIM(ev.target.value)}
                                id = "name"
                                value={nim}
                            />
                            <Input 
                                label ="Password"
                                onChange ={(ev:any) => setPassword(ev.target.value)}
                                id = "password"
                                type= "password"
                                value={password}
                            />
                            <div>
                                {data.password}
                                {data.username}
                            </div>
                            <button className='bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition' type='submit'>
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}   

export default page