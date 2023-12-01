"use client";
import React, { useState } from 'react';
import ImageCard from '../components/ImageCard';

const Vote: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleCardClicked = (imageName: string) => {
    setSelectedImage(imageName);
  };

  const handleFetch = () => {
    if (selectedImage) {
      console.log("fetching calon")
      /* Logic untuk fetching*/
      /* Logic untuk fetching*/
      /* Logic untuk fetching*/
    } else {
      console.log('Calon belum dipilih');
    }
  };

  return (
    <div className='flex flex-col flex-shrink items-center space-y-12'>
      <div className="flex flex-wrap justify-center items-center gap-4">
        <div className='shrink'>
          <ImageCard
            src="/images/livia1.jpg" 
            nama = "Livia Fernanda Putri Erwin" 
            nim = "12021067"
            handleClick={() => handleCardClicked('arkan1')}
            selected={selectedImage === 'arkan1'}
          />
        </div>
        <div className='shrink'>
          <ImageCard
            src="/images/emptyBox.jpg"
            nama="Kotak Kosong"
            nim="-"
            handleClick={() => handleCardClicked('emptyBox')}
            selected={selectedImage === 'emptyBox'}
          />
        </div>
      </div>
      <button onClick={handleFetch} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Next
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
      </button>
    </div>
  );
};

export default Vote;
