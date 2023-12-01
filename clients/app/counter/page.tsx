"use client";
import React, { useState } from 'react';
import Navbar from '../components/navbar'
import CounterCard from '../components/CounterCard'
const page = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleCardClicked = (imageName: string) => {
        setSelectedImage(imageName);
    };
    return (
        <div>
            <Navbar />
            <div className='flex flex-col items-center fixed top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <div className="flex justify-center items-center gap-4">
                    <div className='flex flex-row'>
                        <div>
                            <CounterCard
                                src="/images/arkan1.jpg"
                                nama="Arkam Emilul Fata"
                                nim="12021025"
                                handleClick={() => handleCardClicked('arkan1')}
                                selected={selectedImage === 'arkan1'}
                            />

                        </div>
                        <div>
                            <CounterCard
                                src="/images/timoy2.jpg"
                                nama="Daniel Timothy Natanael Sihombing"
                                nim="12021041"
                                handleClick={() => handleCardClicked('timoy2')}
                                selected={selectedImage === 'timoy2'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page;