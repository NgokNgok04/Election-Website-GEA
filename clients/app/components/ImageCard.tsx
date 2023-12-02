import React from 'react';

interface ImageCardProps {
  src: string;
  nama: string;
  nim: string;
  handleClick: () => void;
  selected: boolean;
}

const ImageCard: React.FC<ImageCardProps> = ({ src, nama, nim, handleClick, selected }) => {
  return (
    <div>
      <button
        onClick={handleClick}
        className={`max-w-sm flex-shrink rounded-lg shadow bg-white hover:transition-transform 
          transition duration-150 ease-in-out hover:scale-105 hover:cursor-pointer'
          ${selected ? 'border-2 border-red-400 transition-all duration-150 ease-in-out ' : 'border border-transparent'}`}
      >
        <img className="rounded-t-lg flex-shrink" src={src} alt="" />

        <div className="p-5 text-center">
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{nama}</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{nim}</p>
          {selected ? (
            <div className="text-green-500 font-semibold mb-2">Selected</div>
          ) : (
            <div className="text-gray-500 mb-2">Not Selected</div>
          )}
        </div>
      </button>
    </div>
  );
};

export default ImageCard;
